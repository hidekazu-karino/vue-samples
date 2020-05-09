<template>
  <div id="app">
    <div>
      <h3>Hello!</h3>
    </div>
    <div>
      <!-- 単一ファイルコンポーネントだと@でイベントを検知してメソッドを呼ぶ-->
      <h3>クリックすると数字が増える</h3>
      <p>{{ number }}</p>
      <button @click="increment">click</button>
    </div>
    <div>
      <h3>v-modelを使った双方向バインディング</h3>
      <!-- formのinputなど双方向バインディングにはv-modelを使う．-->
      <!-- 入力されたイベントを検知してメソッドを呼ぶみたいなことをしなくていい．-->
      <input v-model="message" placeholder="edit me" />
      <p>{{ message }}</p>
    </div>

    <div>
      <h3>renderプロパティを使って動的にタグを生成</h3>
      <!-- renderプロパティで動的にタグそのものを作れる-->
      {{ message_render }}
    </div>
    <div>
      <h3>v-bindでタグの属性を変更する．下の文章のサイズが大きくなる．</h3>
      <p v-bind:style="{ fontSize: fontSize + 'px' }">{{ message_style_change }}</p>
      <input type="number" v-model.number="fontSize" placeholder="10" />
    </div>
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
      message_render: "Hello Vue!",
      message_style_change: "This sentence becomes bigger.",
      fontSize: 10
    };
  },
  // renderに設定されているのはアロー関数
  render: element => {
    return element(
      "p",
      // styleが保存時にシングルクオートが取れてしまって反映されない．
      { style: "font-size:20pt; color:red;" },
      this.message_render
    );
  },
  methods: {
    increment() {
      this.number += 1;
    }
  }
};
</script>
