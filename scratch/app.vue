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
      <p v-bind:style="{ fontSize: fontSize + 'px' }">{{ message_size_change }}</p>
      <input type="number" v-model.number="fontSize" placeholder="10" />
    </div>
    <div>
      <h3>styleを詳細に指定する</h3>
      <p v-bind:style="styles">{{ message_for_style }}</p>
    </div>
    <div>
      <h3>v-ifで条件分岐</h3>
      <p v-if="flag">This is normal.</p>
      <p v-else>Some problems.</p>
      <button @click="flag=!flag">Click</button>
    </div>
    <div>
      <template v-if="flag">
        <p>Table</p>
        <table>
          <tr>
            <th>Name</th>
            <th>mail</th>
          </tr>
          <tr>
            <td>Jekyll</td>
            <td>jekyll@good</td>
          </tr>
          <tr>
            <td>Hyde</td>
            <td>hyde@evil</td>
          </tr>
        </table>
      </template>
      <template v-else>
        <p>List</p>
        <ul>
          <li>Jekyll's address is jekyll@good</li>
          <li>Hyde's address is hyde@evil</li>
        </ul>
      </template>
    </div>
    <div>
      <h3>v-forでリストを表示する．</h3>
      <tr v-for="item in prefectures" :key="item">
        <td>{{ item}}</td>
      </tr>
      <tr v-for="(item, id) in prefectures" :key="id">
        <td>{{ id }}</td>
        <td>{{item}}</td>
      </tr>
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
      message_size_change: "This sentence becomes bigger.",
      fontSize: 10,
      message_for_style: "Sample style",
      flag: true,
      styles: {
        // marginは領域間のスペース
        margin: "10px",
        // paddingは領域間のスペース
        padding: "5px 20px",
        fontSize: "20px",
        color: "red",
        backgroudColor: "#fee",
        // 文字の周りを3pxの青色実線で囲む
        border: "3px solid blue"
      },
      prefectures: ["Osaka", "Kyoto", "Tokyo"]
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
