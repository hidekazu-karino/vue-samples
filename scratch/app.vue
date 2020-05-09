<template>
  <div id="app">
    <h1>Hello!</h1>
    <p>{{ number }}</p>
    <br />
    <!-- 単一ファイルコンポーネントだと@でイベントを検知してメソッドを呼ぶ-->
    <button @click="increment">click</button>
    <hr />
    <!-- formのinputなど双方向バインディングにはv-modelを使う．-->
    <!-- 入力されたイベントを検知してメソッドを呼ぶみたいなことをしなくていい．-->
    <input v-model="message" placeholder="edit me" />
    <p>{{ message }}</p>
    <hr />
    {{ message_render }}
  </div>
</template>

<script>
export default {
  el: "#app",
  // dataは関数にしてリターンでオブジェクトを返すようにする．
  data() {
    return {
      number: 0,
      message: "please type!",
      message_render: "Hello Vue!"
    };
  },
  render: element => {
    return element("p", this.message_render);
  },
  methods: {
    increment() {
      this.number += 1;
    }
  }
};
</script>