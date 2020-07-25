import com.soywiz.kds.Array2
import com.soywiz.kds.Extra
import com.soywiz.korio.async.Signal
import com.soywiz.korma.geom.PointInt
import com.soywiz.korma.geom.ds.get
import kotlin.random.Random

enum class MineState { UNMARKED, EMPTY, MARKED, MINE }

/**
 * Class to maintain board state
 */
class Board(val width: Int = 5, val height: Int = 5, private val mineCount: Double = 0.25) : Extra by Extra.Mixin() {

    /**
     * Class to maintain cell state
     */
    inner class Cell(x: Int, y: Int) : Extra by Extra.Mixin() {
        val pos = PointInt(x, y)
        var state = MineState.UNMARKED

        fun mark() {
            if (state == MineState.UNMARKED) state = MineState.MARKED
        }

        fun unmark() {
            if (state == MineState.MARKED) state = MineState.UNMARKED
        }

        fun check() {
            if (state == MineState.UNMARKED) {
                state = if (mineMap[pos]) {
                    MineState.MINE
                } else {
                    MineState.EMPTY.also {
                        emptyFlaggedSignal(Unit)
                    }
                }
            }
        }
    }

    private val gameOverSignal = Signal<Unit>()
    private val emptyFlaggedSignal = Signal<Unit>()

    private val mineMap = Array2(width, height) { Random.nextDouble() < mineCount }
    private val cells = Array2(width, height) { Cell(it % width, it / width) }
    val board
        get() = cells.map { it.state }

    private val emptyCount = mineMap.count { !it }
    private var emptyFlaggedCount = 0

    /**
     * List of  size [width], holds the counts for each column
     */
    val emptyCountCol = List(width) { mutableListOf<Int>() }
    /**
     * List of  size [height], holds the counts for each row
     */
    val emptyCountRow = List(height) { mutableListOf<Int>() }

    init {
        // generate the counts for each row/column
        cells.forEach {
            if (!mineMap[it.pos]) {
                val posX = it.pos.x
                val posY = it.pos.y
                if (posX == 0 || mineMap[posX - 1, posY]) {
                    emptyCountRow[posY].add(1)
                } else {
                    val arr = emptyCountRow[posY]
                    arr[arr.size - 1] = arr.last().inc()
                }
                if (posY == 0 || mineMap[posX, posY - 1]) {
                    emptyCountCol[posX].add(1)
                } else {
                    val arr = emptyCountCol[posX]
                    arr[arr.size - 1] = arr.last().inc()
                }
            }
        }

        emptyFlaggedSignal {
            emptyFlaggedCount++
            println("Remaining count ${emptyCount - emptyFlaggedCount}")
            if (emptyFlaggedCount == emptyCount) {
                gameOverSignal(Unit)
            }
        }

    }

    operator fun get(x: Int, y: Int) = cells[x, y]

    /**
     * Register [handler] for game over event
     */
    fun gameOver(handler: (Unit) -> Unit) {
        gameOverSignal.once(handler)
    }
}