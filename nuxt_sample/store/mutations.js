export default {
    increment(state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    increment_by_n(state, n) {
        state.counter += n
    }
}