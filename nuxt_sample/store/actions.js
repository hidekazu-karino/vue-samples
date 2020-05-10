export default {
    doit: function (context, obj) {
        context.commit('change_message', obj.message);
        context.commit('increment_by_n', obj.number)
    }
}