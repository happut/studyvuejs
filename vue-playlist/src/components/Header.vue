<template>
<header @click="changeTitle">
    <h1>{{ title1 }}{{ title }}</h1>
</header>
</template>

<script>
export default {
  name: "app-header",
  props: {
    title: {
      type: String
    }
  },
  methods: {
    changeTitle: function() {
      //   this.title = "changed";
      this.$emit("titleChanged", "子向父传值");
    }
  },
  data() {
    return {
      title1: "wangfei.ml Demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
