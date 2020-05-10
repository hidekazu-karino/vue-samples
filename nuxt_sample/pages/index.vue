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
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Hello",
      add_number: 0
    };
  },
  methods: {
    Add() {
      this.$store.commit("increment_by_n", parseInt(this.add_number));
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
