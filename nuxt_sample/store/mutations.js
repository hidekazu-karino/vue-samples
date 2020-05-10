export default {
    change_message(state, m) {
        state.message = m
    },
    increment(state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    increment_by_n(state, n) {
        state.counter += n
    },
    increment_and_change_message(state, obj) {
        state.counter += obj.number
        state.message = obj.message
    }
}