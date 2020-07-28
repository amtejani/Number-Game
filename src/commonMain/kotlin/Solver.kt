import com.soywiz.korma.geom.PointInt

object Solver {
    enum class CellState { NONE, EMPTY, MINE }

    suspend fun solve(board: Board, updateCell: suspend (PointInt) -> Unit) {
        val boardVal = board.cells
    }

    /**
     * Solve a single line given the [line] state and the counts
     */
    fun solveLine(line: List<MineState>, counts: List<Int>): List<CellState> {
        // get num of mines
        val mines = line.size - counts.sum()
        // Ignore number of mines that are required to be placed between consecutive empty positions
        val availableMines = mines - (counts.size - 1).coerceAtLeast(0)
        val availablePositions = counts.size + 1

        //  TODO Optimization: add logic to check if a count is complete
        if (availableMines == 0) {
            // If no available mines (total count + spacing mines = row size), then we can fill all positions with EMPTY
            return makeLine(List(availablePositions) { 0 }, counts)
        } else if (availablePositions == 1) {
            // If no available positions (total count = 0), then we can fill all positions with MINE
            return makeLine(List(availablePositions) { availableMines }, counts)
        }
        val possibleMinePositions = partition(availableMines, availablePositions)

        return possibleMinePositions.map {
            makeLine(it, counts).also { newLine ->
                assert(newLine.size == line.size, "Possible line matches new line length")
            }
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
        assert(!emptyList.hasNext(), "Empty list is longer than mine list")
        assert(mineList.hasNext(), "Mine list is same length as empty list")
        yieldAll(List(mineList.next()) { CellState.MINE })
        assert(!mineList.hasNext(), "Mine list should be one value longer than empty list")
    }.toList()
}