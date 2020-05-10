export default {
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