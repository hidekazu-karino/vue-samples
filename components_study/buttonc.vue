<template>
  <div>
    <h3>クリックした回数を表示する．</h3>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <h3>クリックした数に応じて色を変える．</h3>
    <button v-bind:class="{red:isRed}" v-on:click="doAction">clicked: {{ counter }}</button>
  </div>
</template>

<script>
// export defaultのなかにtemplateを仕込んでも反映されなかった．
export default {
  name: "button",
  data: function() {
    return {
      count: 0,
      counter: 0,
      isRed: false
    };
  },
  methods: {
    doAction: function() {
      this.counter++;
      if (this.counter > 10) {
        this.counter = 0;
      }
      if (this.counter % 2 == 0) {
        this.isRed = false;
      } else {
        this.isRed = true;
      }
    }
  }
};
</script>

<style>
.red {
  color: white;
  background-color: red;
}
</style>