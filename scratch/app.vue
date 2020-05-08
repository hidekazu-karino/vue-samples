<template>
  <div id="app">
    <h1>Hello!</h1>
    <p>
      {{ number }}
    </p>
    <hr>
    <!-- 単一ファイルコンポーネントだと@でイベントを検知してメソッドを呼ぶ-->
    <button @click="increment">
        click
    </button>
  </div>
</template>

<script>
export default {
  el: "#app",
  // dataは関数にしてリターンでオブジェクトを返すようにする．
  data() {
    return {
        number: 0
    }
  },
  methods: {
      increment() {
          this.number += 1
      }
  }
};
</script>