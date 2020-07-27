import com.soywiz.korma.geom.PointInt

object Solver {
    enum class CellState { NONE, EMPTY, MINE }

    suspend fun solve(board: Board, updateCell: suspend (PointInt) -> Unit) {
        val boardVal = board.cells
    }

    suspend fun solveLine(line: List<MineState>, counts: List<Int>): List<CellState> {
        // get num of mines
        val mines = line.size - counts.sum()
        // Ignore number of mines that are required to be placed between consecutive empty positions
        val availableMines = mines - (counts.size - 1)
        val availablePositions = counts.size + 1

        val possibleMinePositions = partition(availableMines, availablePositions)

        return possibleMinePositions.map {
            makeLine(it, counts)
            // TODO assert same size as line
        }.filter { possibleLine ->
            // Only consider possible lines if they match the current board state
            possibleLine.zip(line).all {
                it.second == MineState.UNMARKED
                        || it.first == CellState.EMPTY && it.second != MineState.MINE && it.second != MineState.MARKED
                        || it.first == CellState.MINE && (it.second == MineState.MINE || it.second == MineState.MARKED)
            }
        }.reduce { acc, list ->
            acc.zip(list).map {
                if (it.first == it.second) {
                    it.first
                } else {
                    CellState.NONE
                }
            }
        }
    }

    private fun makeLine(mineCount: List<Int>, emptyCount: List<Int>): List<CellState> = sequence {
        val mineList = mineCount.iterator()
        val emptyList = emptyCount.iterator()
        while (mineList.hasNext() && emptyList.hasNext()) {
            yieldAll(List(mineList.next()) { CellState.MINE })
            yieldAll(List(emptyList.next()) { CellState.EMPTY })
            if (emptyList.hasNext()) yield(CellState.MINE)
        }
        // TODO assert empty.hasNext is false
        yieldAll(List(mineList.next()) { CellState.MINE })
        // TODO assert mines.hasNext is false
    }.toList()
}