import com.soywiz.kds.Array2

/**
 * Map an [Array2] to another [Array2]
 */
inline fun <T, R : Any> Array2<T>.map(transform: (T) -> R): Array2<R> {
    return Array2(width, height) { transform(get(it % width, it / width)) }
}

inline fun assert(cond: Boolean, message: Any? = null) {
    if (!cond) throw AssertionError(message)
}

fun <T> Array2<T>.row(row: Int): List<T> {
    return this.toList().slice((row * width) until (row * (width + 1)))
}

fun <T> Array2<T>.col(col: Int): List<T> {
    return this.toList().slice((0 until height).map { it * width + col })
}

// TODO use 3rd party library
fun Int.factorial(min: Int = 1) = (min..this).fold(1) { acc, i ->
    acc * i
}

// TODO use 3rd party library
fun Int.choose(num: Int): Int {
    val high = if (num <= this / 2) this - num else num
    val low = this - high
    return this.factorial(high + 1) / low.factorial()
}

/**
 * Return 2D list of size nCk x k
 * TODO use 3rd party library
 */
fun enumerateCombinations(n: Int, k: Int): List<List<Int>> {
    fun enumerate(range: IntRange, k: Int): List<List<Int>> {
        if (k == 0) return listOf(emptyList())
        if (k == 1) return range.toList().map { listOf(it) }
        val out = mutableListOf<List<Int>>()
        for (i in range.first..(range.last - (k - 1))) {
            val next = enumerate((i + 1)..range.last, k - 1).map {
                it.toMutableList().apply {
                    add(0, i)
                }
            }
            out.addAll(next)
        }
        return out
    }
    return enumerate(0 until n, k)
}

/**
 * Partition [n] into [k] parts
 */
fun partition(n: Int, k: Int): List<List<Int>> {
    val dividers = k - 1
    val total = n + dividers
    return enumerateCombinations(total, dividers).map {
        val out = mutableListOf<Int>()
        for (i in 0 until k) {
            // Subtract this value from previous value, then subtract 1
            // If first value, subtract nothing (subtract -1 so number does not change
            val count = it.getOrElse(i) { total } - it.getOrElse(i - 1) { -1 } - 1
            out.add(count)
        }
        out
    }
}