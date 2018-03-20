<template>
  <div id="app">
    <app-header v-bind:title="title" @titleChanged="updateTitle($event)"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Users from "./Users";
import Header from "./Header";
import Footer from "./Footer";

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
  data: function() {
    return {
      title: "传递的一个值",
      users: []
    };
  },
  created: function() {
    this.$http.get("http://jsonplaceholder.typicode.com/users").then(data => {
      console.info(data)
      this.users = data.body;
    });
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
