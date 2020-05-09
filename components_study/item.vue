<template>
  <li>{{ name }}: {{ price }}円</li>
</template>
 
<script>
export default {
  name: "Item",
  // 親コンポーネントから受け取るpropsを定義.
  props: ["name", "price"]
};
</script>