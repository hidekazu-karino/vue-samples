<template>
  <div class="hello">
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
    <hr />
    <div>
      <input type="text" v-model="input" />
      <button v-on:click="doAction">Click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    title: String
  },
  data: function() {
    return {
      message: "What's your name?",
      input: "no name"
    };
  },
  methods: {
    doAction: function() {
      this.message = "Hello, Mr " + this.input;
    }
  }
};
</script>