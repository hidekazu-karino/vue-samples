<template>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
// export defaultのなかにtemplateを仕込んでも反映されなかった．
export default {
  name: "button",
  data: function() {
    return {
      count: 0
    };
  },
  template: "<p>Hello</p>"
};
</script>