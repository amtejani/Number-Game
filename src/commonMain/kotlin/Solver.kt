import com.soywiz.korma.geom.PointInt

object Solver {
    suspend fun solve(board: Board, updateCell: suspend (PointInt) -> Unit) {
        val boardVal = board.cells
    }
}