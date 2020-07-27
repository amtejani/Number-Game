import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.ui.textButton
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.async.AsyncSignal
import com.soywiz.korio.lang.Closeable

suspend fun main() = Korge(width = 800, height = 800, bgcolor = Colors["#2b2b2b"]) {
    var board: Board? = null
    var boardContainer: Container? = null
    var gameOverText: Text? = null
    var gameOverCloseable: Closeable? = null
    val newGame = AsyncSignal<Unit>()
    var boardSize = 5
    var minePercent = 50

    val buttonContainer = container {
        position(40,40)
        val newGameButton = textButton(text = "New Game") {
            onClick {
                newGame(Unit)
            }
        }
        textButton(text = "Solve") {
            alignLeftToRightOf(newGameButton, 20.0)
            onClick {
                board?.let { board ->
                    Solver.solve(board) {
                        board[it.x, it.y].update()
                    }
                }
            }
        }
        val sizeSignal = AsyncSignal<Unit>()
        val sizeLabel = text("Size:") {
            alignTopToBottomOf(newGameButton, 20.0)
        }
        val sizeMinus = text("-") {
            alignTopToTopOf(sizeLabel)
            alignLeftToRightOf(sizeLabel, 20.0)
            onClick {
                boardSize = (boardSize - 1).coerceAtLeast(1)
                sizeSignal(Unit)
            }
        }
        val sizeText = text("$boardSize") {
            alignTopToTopOf(sizeLabel)
            alignLeftToRightOf(sizeMinus, 20.0)
            sizeSignal {
                text = "$boardSize"
            }
        }
        val sizePlus = text("+") {
            alignTopToTopOf(sizeLabel)
            alignLeftToRightOf(sizeText, 20.0)
            onClick {
                boardSize += 1
                sizeSignal(Unit)
            }
        }
        val countSignal = AsyncSignal<Unit>()
        val countLabel = text("Mine Percent:") {
            alignTopToTopOf(sizeLabel)
            alignLeftToRightOf(sizePlus, 40.0)
        }
        val countMinus = text("-") {
            alignTopToTopOf(sizeLabel)
            alignLeftToRightOf(countLabel, 20.0)
            onClick {
                minePercent = (minePercent - 10).coerceIn(0..100)
                countSignal(Unit)
            }
        }
        val countText = text("$minePercent%") {
            alignTopToTopOf(sizeLabel)
            alignLeftToRightOf(countMinus, 20.0)
            sizeSignal {
                text = "$minePercent%"
            }
        }
        text("+") {
            alignTopToTopOf(sizeLabel)
            alignLeftToRightOf(countText, 20.0)
            onClick {
                minePercent = (minePercent + 10).coerceIn(0..100)
                countSignal(Unit)
            }
        }
    }

    newGame {
        removeChild(boardContainer)
        removeChild(gameOverText)
        gameOverCloseable?.close()
        board?.cleanUp()

        board = Board(boardSize, boardSize, (minePercent.toDouble() / 100).coerceIn(0.0, 1.0)).also {
            boardContainer = createBoard(it)
            boardContainer?.alignTopToBottomOf(buttonContainer, 20.0)
            gameOverCloseable = it.gameOver { mistakes ->
                println("Game Over, mistakes: $mistakes")
                gameOverText = text("Game Over, Mistakes made: $mistakes") {
                    position(20.0, 20.0)
                }
            }
        }
    }

    newGame(Unit)
}

/**
 * Generate [Board] UI.
 * Show the empty counts next to the rows/columns
 */
fun Container.createBoard(board: Board) =
        container {
            position(100, 100)
            val size = 40.0
            val padding = 8.0
            for (i in 0 until board.width) {
                for (j in 0 until board.height) {
                    solidRect(size, size, color = Colors.WHITE) {
                        position(i * (size + padding), j * (size + padding))
                        board[i, j].init(this, board)
                    }
                }
            }
            for (i in 0 until board.width) {
                for (j in board.emptyCountCol[i].indices) {
                    text(board.emptyCountCol[i][j].toString()) {
                        position(i * (size + padding), (j + board.height) * (size + padding))
                        board.onColCountDone(i, j) {
                            color = Colors.DARKGRAY
                        }
                    }
                }
            }
            for (j in 0 until board.height) {
                for (i in board.emptyCountRow[j].indices) {
                    text(board.emptyCountRow[j][i].toString()) {
                        position((i + board.width) * (size + padding), j * (size + padding))
                        board.onRowCountDone(j, i) {
                            color = Colors.DARKGRAY
                        }
                    }
                }
            }
        }