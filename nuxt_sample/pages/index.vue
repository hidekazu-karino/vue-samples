<template>
  <div>
    <h3>ストアからのメッセージを表示</h3>
    <h3>{{ title }}</h3>
    <div>
      <br />
      <p>{{ $store.state.message }}</p>
    </div>
    <div>
      <h3>ミューテーションを使ってストアのデータを変更する</h3>
      <p>{{ $store.state.counter }}</p>
      <br />
      <button @click="$store.commit('increment')">increment</button>
      <button @click="$store.commit('decrement')">decrement</button>
      <input type="number" v-model="add_number" />
      <button @click="Add">Add n</button>
      <br />
      <input type="number" v-model="add_number" />
      <input v-model="add_message" />
      <button @click="add_and_message">Add and message</button>
      <button @click="change_by_actions">call actions</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Hello",
      add_number: 0,
      add_message: ""
    };
  },
  methods: {
    Add() {
      this.$store.commit("increment_by_n", parseInt(this.add_number));
    },
    add_and_message() {
      this.$store.commit({
        type: "increment_and_change_message",
        number: parseInt(this.add_number),
        message: this.add_message
      });
    },
    change_by_actions() {
      this.$store.dispatch({
        type: "doit",
        number: parseInt(this.add_number),
        message: this.add_message
      });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
