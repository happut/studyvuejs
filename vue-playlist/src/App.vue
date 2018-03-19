<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <users/>
  </div>
</template>

<script>
import Users from "./components/Users";

export default {
  name: "App",
  components: {
    Users
  },
  data() {
    return {
      title: "这是我第一个脚手架"
    };
  }
};
</script>

<style scoped>
h1{
  color: purple;
}
</style>
