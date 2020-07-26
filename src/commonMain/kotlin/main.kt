import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.ui.textButton
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.async.AsyncSignal
import com.soywiz.korio.lang.Closeable

suspend fun main() = Korge(width = 512, height = 512, bgcolor = Colors["#2b2b2b"]) {
    var board: Board? = null
    var boardContainer: Container? = null
    var gameOverText: Text? = null
    var gameOverCloseable: Closeable? = null
    val newGame = AsyncSignal<Unit>()

    val newGameButton = textButton(text = "New Game") {
        parent?.let {
            alignTopToTopOf(it, 60.0)
            alignLeftToLeftOf(it, 20.0)
        }
        onClick {
            newGame(Unit)
        }
    }
    textButton(text = "Solve") {
        alignTopToTopOf(newGameButton)
        alignLeftToRightOf(newGameButton, 20.0)
        onClick {
            board?.let { board ->
                Solver.solve(board) {
                    board[it.x, it.y].update()
                }
            }
        }
    }

    newGame {
        removeChild(boardContainer)
        removeChild(gameOverText)
        gameOverCloseable?.close()
        board?.cleanUp()

        board = Board().also {
            boardContainer = createBoard(it)
            boardContainer?.alignTopToBottomOf(newGameButton, 20.0)
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