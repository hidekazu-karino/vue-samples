<template>
  <div id="app">
    <div>
      <h3>ボタンを読み込む</h3>
      <buttoncounter />
    </div>
    <div>
      <h3>propsでデータを渡してアイテムを表示する．</h3>
      <p>List</p>
      <ul v-for="item in items" :key="item">
        <showItem :name="item.name" :price="item.price"></showItem>
      </ul>
    </div>
    <div>
      <h2>親から子コンポーネントへデータを渡す</h2>
      <!-- 子コンポーネントのプロパティにv-bindで親のプロパティをバインディングすれば親から子へデータを渡せる-->
      <helloworld v-bind:title="message" />
      <button v-on:click="sendTitle">change title</button>
      <h2>子から親コンポーネントへデータを渡す</h2>
      <!-- 子コンポーネントから親コンポーネントへデータを受け渡すよう-->
      <helloworld v-on:result-event="reflectDataFromChild" />
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script>
//importの相対パスは以下のような感じ
import buttoncounter from "./buttonc.vue";
import showItem from "./item.vue";
import helloworld from "./child.vue";
export default {
  name: "#app",
  components: {
    buttoncounter,
    showItem,
    helloworld
  },
  data() {
    return {
      items: [
        { name: "ぶどう", price: 500 },
        { name: "apple", price: 300 }
      ],
      message: "HELLO",
      result: "no event"
    };
  },
  methods: {
    sendTitle: function() {
      let input = prompt("new title:");
      this.message = input;
    },
    reflectDataFromChild: function(message) {
      this.result = '(*** you send: "' + message + '".***)';
    }
  }
};
</script>