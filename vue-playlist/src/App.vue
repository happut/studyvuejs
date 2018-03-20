<template>
  <div id="app">
    <app-header v-bind:title="title" @titleChanged="updateTitle($event)"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
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
  methods: {
    updateTitle: function(title) {
      this.title = title;
    }
  },
  data() {
    return {
      title: "传递的一个值",
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
