<template>
  <div id="app">
    <h1>Hello!</h1>
    <p>
      {{ number }}
    </p>
    <br>
    <!-- 単一ファイルコンポーネントだと@でイベントを検知してメソッドを呼ぶ-->
    <button @click="increment">
        click
    </button>
    <hr>
    <!-- formのinputなど双方向バインディングにはv-modelを使う．-->
    <!-- 入力されたイベントを検知してメソッドを呼ぶみたいなことをしなくていい．-->
    <input v-model="message" placeholder="edit me">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  el: "#app",
  // dataは関数にしてリターンでオブジェクトを返すようにする．
  data() {
    return {
        number: 0,
        message: "please type!"
    }
  },
  methods: {
      increment() {
          this.number += 1
      }
  }
};
</script>