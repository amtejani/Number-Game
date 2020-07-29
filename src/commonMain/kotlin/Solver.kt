import com.soywiz.kds.Array2
import com.soywiz.kds.Queue
import com.soywiz.korio.async.AsyncSignal
import com.soywiz.korio.async.mapSignal
import com.soywiz.korma.geom.PointInt
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

object Solver {
    enum class CellState { NONE, EMPTY, MINE }
    enum class Line { ROW, COL }
    data class Info(
            val line: Line,
            val pos: PointInt
    )

    data class NextLine(
            val line: Line,
            val pos: Int
    )

    /**
     * Solve the board by attempting to solve each row and column, then solve any row or column that has changed.
     */
    suspend fun solve(board: Board, updateCell: suspend (PointInt) -> Unit) = withContext(Dispatchers.Default) {
        val queue = Queue<NextLine>()
        val signal = AsyncSignal<Info>()
        signal.mapSignal { it.pos }.add(updateCell)
        signal.mapSignal {
            if (it.line == Line.ROW) {
                NextLine(Line.COL, it.pos.x)
            } else {
                NextLine(Line.ROW, it.pos.y)
            }
        }.add {
            if (!queue.contains(it)) {
                queue.enqueue(it)
            }
        }
        val cells = board.cells
        val countsRow = board.emptyCountRow
        val countsCol = board.emptyCountCol
        for (r in 0 until board.height) {
            val row = cells.row(r)
            updateLine(row, countsRow[r], Line.ROW, signal)
        }
        for (c in 0 until board.width) {
            val col = cells.col(c)
            updateLine(col, countsCol[c], Line.COL, signal)
        }
        while (queue.peek() != null) {
            val i = queue.dequeue()
            println("Next Line: $i")
            val getLine = if (i.line == Line.ROW) Array2<Board.Cell>::row else Array2<Board.Cell>::col
            val counts = if (i.line == Line.ROW) countsRow else countsCol
            updateLine(getLine(cells, i.pos), counts[i.pos], i.line, signal)
        }
        println("Done solve pass")
        signal.clear()
    }

    /**
     * Solve line. Mark any mines, and check any empty positions.
     * Notify [signal] if operation was performed.
     */
    private suspend fun updateLine(line: List<Board.Cell>, counts: List<Int>, dir: Line, signal: AsyncSignal<Info>) {
        val sol = solveLine(line.map { it.state }, counts)
        sol.zip(line).forEach {
            if (it.second.state == MineState.UNMARKED) {
                if (it.first == CellState.MINE) {
                    it.second.mark()
                    signal(Info(dir, it.second.pos))
                } else if (it.first == CellState.EMPTY) {
                    it.second.check()
                    signal(Info(dir, it.second.pos))
                }
            }
        }
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