<template>
  <section class="container">
    <h2>{{ title }}</h2>
    <p v-html="message">no message.</p>
    <hr />
    <div class="right">
      <router-link to="/">Go to Top</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Login"
    };
  },
  computed: {
    message: function() {
      let id =
        this.$route.params.id != undefined
          ? this.$route.params.id
          : "*** no id ***";
      let pass =
        this.$route.params.id != undefined
          ? this.$route.params.pass
          : "*** no password ***";
      return "ID: " + id + "<br>PASS: " + pass;
    }
  }
};
</script>