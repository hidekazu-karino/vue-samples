<template>
  <div id="app">
    <section class="container">
      <div>
        <h2>クリックすると数字が増える</h2>
        <input v-model="id" placeholder="post id" />
        <button @click="call_api(id)">click</button>
      </div>
      <h1>{{title}}</h1>
      <p>{{message}}</p>
      <table>
        <tr>
          <th>User ID</th>
          <td>{{json_data.userId}}</td>
        </tr>
        <tr>
          <th>ID</th>
          <td>{{json_data.id}}</td>
        </tr>
        <tr>
          <th>Title</th>
          <td>{{json_data.title}}</td>
        </tr>
        <tr>
          <th>Body</th>
          <td>{{json_data.body}}</td>
        </tr>
      </table>
    </section>
  </div>
</template>


<script>
const axios = require("axios");

let url = "https://jsonplaceholder.typicode.com/posts/";

export default {
  name: "app",
  data: function() {
    return {
      title: "Axios",
      msg: "",
      message: "axios sample.",
      id: 1,
      //json_dataを定義しておかないと表示されなかった．
      json_data: {}
    };
  },
  beforeCreate: async function() {
    let id = 1;
    let result = await axios.get(url + id);
    return { json_data: result.data };
  },
  methods: {
    async call_api(id) {
      console.log("API call");
      axios
        .get(url + id)
        .then(res => {
          this.$set(this, "json_data", res.data);
        })
        .catch(error => {
          console.log(error);
          (this.message = "ERROR"), this.$set(this, "json_data", {});
        });
    }
  }
};
</script>


<style>
tr th {
  width: 150px;
  background-color: darkblue;
  color: white;
  font-size: 16pt;
}
tr td {
  padding: 5px 10px;
  background-color: #eef;
  font-size: 14pt;
}
</style>