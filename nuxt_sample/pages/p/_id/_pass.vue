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
  // validateを追加する．真偽値を返す関数
  //問題ないときはtrue,問題あるときは404エラーを発生させる．
  validate({ params }) {
    if (params.id == undefined || params.pass.length <= 4) {
      return false;
    } else {
      return true;
    }
  },
  computed: {
    message: function() {
      return (
        "ID: " + this.$route.params.id + "<br>PASS: " + this.$route.params.pass
      );
    }
  }
};
</script>