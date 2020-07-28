import kotlin.random.Random
import kotlin.test.Test
import kotlin.test.assertTrue

class SolveTest {

    @Test
    fun testSolveLine() {
        val len = 6
        val mineList = List(len) { Random.nextBoolean() }
        val countList = mineList.countConsecutive { !it }
        val stateList = List(len) { MineState.UNMARKED }

        println("Mines: " + mineList.joinToString())
        println("Counts: " + countList.joinToString())

        val line = Solver.solveLine(stateList, countList)
        println("Solve out: " + line.joinToString())

        val correct = mineList.zip(line).map {
            it.second == Solver.CellState.NONE
                    || it.first && it.second == Solver.CellState.MINE
                    || !it.first && it.second == Solver.CellState.EMPTY
        }.all { it }

        assertTrue(correct)
    }

    /**
     * Count the consecutive fields in this iterable that match [condition].
     */
    private fun <T> Iterable<T>.countConsecutive(condition: (T) -> Boolean) = sequence {
        val lastCount = fold(0) { acc, i ->
            if (condition(i)) {
                acc + 1
            } else {
                if (acc != 0) yield(acc)
                0
            }
        }
        if (lastCount != 0) yield(lastCount)
    }.toList()
}