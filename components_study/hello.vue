<template>
  <div id="app">
    <buttoncounter />
  </div>
</template>

<script>
//importの相対パスは以下のような感じ
import buttoncounter from "./button.vue";
export default {
  name: "#app",
  components: {
    buttoncounter
  }
};
</script>