import com.soywiz.kds.Array2

/**
 * Map an [Array2] to another [Array2]
 */
inline fun <T, R: Any> Array2<T>.map(transform: (T) -> R): Array2<R> {
    return Array2(width, height) { transform(get(it % width, it / width)) }
}