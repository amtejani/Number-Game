import com.soywiz.korma.geom.PointInt

object Solver {
    suspend fun solve(board: Board, updateCell: suspend (PointInt) -> Unit) {
        val boardVal = board.cells
    }

    suspend fun solveLine(line: List<MineState>, counts: List<Int>) {
        // get num of mines
        val mines = line.size - counts.sum()
        // Ignore number of mines that are required to be placed between consecutive empty positions
        val availableMines = mines - (counts.size - 1)
        val availablePositions = counts.size + 1

        // num of possible solutions is [availableMines] choose [counts.size + 1]
        val possibleSolutions = (availableMines + availablePositions).choose(availablePositions)
    }
}