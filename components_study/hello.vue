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
  </div>
</template>

<script>
//importの相対パスは以下のような感じ
import buttoncounter from "./button.vue";
import showItem from "./item.vue";
export default {
  name: "#app",
  components: {
    buttoncounter,
    showItem
  },
  data() {
    return {
      items: [
        { name: "ぶどう", price: 500 },
        { name: "apple", price: 300 }
      ]
    };
  }
};
</script>