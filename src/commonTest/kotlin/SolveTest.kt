import kotlin.random.Random
import kotlin.test.Test
import kotlin.test.assertTrue

class SolveTest {

    @Test
    fun testSolveLine() {
        val len = 6
        val mineList = List(len) { Random.nextBoolean() }
        val countList = mineList.countConsecutive { !it }.map { Solver.Count(it) }
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

    @Test
    fun testSolvePartiallyCompletedLine() {
        val mineList = listOf(true, true, false, true, false, false, false)
        val countList = listOf(Solver.Count(1, true, 2..2), Solver.Count(3))
        val stateList = listOf(MineState.UNMARKED, MineState.UNMARKED, MineState.EMPTY, MineState.UNMARKED, MineState.EMPTY, MineState.UNMARKED, MineState.UNMARKED)

        println("Mines: " + mineList.joinToString())
        println("Counts: " + countList.joinToString())

        val line = Solver.solveLine(stateList, countList)
        println("Solve out: " + line.joinToString())

        val correct = mineList.zip(line).map {
            it.first && it.second == Solver.CellState.MINE
                    || !it.first && it.second == Solver.CellState.EMPTY
        }.all { it }

        assertTrue(correct)
    }
}