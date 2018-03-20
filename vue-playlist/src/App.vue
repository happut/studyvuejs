<template>
  <div id="app">
    <app-header></app-header>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    users: Users,
    "app-header": Header,
    "app-footer": Footer
  },
  data() {
    return {
      title: "这是我第一个脚手架",
      users: [
        {
          name: "wangfei",
          position: "web开发",
          show: false
        },
        {
          name: "test",
          position: "web开发",
          show: false
        },
        {
          name: "taotao",
          position: "web开发",
          show: false
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
