<template>
  <section class="container">
    <h3>{{ title }}</h3>
    <div>
      <br />
      <p>{{ $store.state.message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Hello"
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
