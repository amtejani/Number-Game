import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.async.AsyncSignal

suspend fun main() = Korge(width = 512, height = 512, bgcolor = Colors["#2b2b2b"]) {
    var board = Board()
    var boardContainer = createBoard(board)

    var gameOverText: Text? = null
    val newGame = AsyncSignal<Unit>()
    newGame {
        removeChild(boardContainer)
        removeChild(gameOverText)
        board = Board()
        boardContainer = createBoard(board)
    }
    board.gameOver {
        println("Game Over")
        gameOverText = text("Game Over") {
            position(60.0, 60.0)
        }
    }
    val newGameButton = text("New Game") {
        parent?.let {
            alignTopToTopOf(it, 20.0)
            alignLeftToLeftOf(it, 20.0)
        }
        bgcolor = Colors.RED
        onClick {
            newGame(Unit)
        }
    }
    text("Solve") {
        alignTopToTopOf(newGameButton)
        alignLeftToRightOf(newGameButton, 20.0)
        bgcolor = Colors.GREEN
        onClick {
            Solver.solve(board) {
                board[it.x, it.y].update()
            }
        }
    }
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
                    }
                }
            }
            for (j in 0 until board.height) {
                for (i in board.emptyCountRow[j].indices) {
                    text(board.emptyCountRow[j][i].toString()) {
                        position((i + board.width) * (size + padding), j * (size + padding))
                    }
                }
            }
        }