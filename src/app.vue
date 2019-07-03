<template>
  <div id="app-container">
    <div id="cover"></div>
    <oHeader v-on:lis="fun">
      <div></div>
    </oHeader>
    <todo></todo>
    <oFooter></oFooter>
  </div>
</template>
<script>
import oHeader from "./todo/header";
import oFooter from "./todo/footer.jsx";
import todo from "./todo/todo";
export default {
  name: "app",
  components: {
    oHeader,
    oFooter,
    todo
  },
  data() {
    return {
      text: "PLUGIN"
    };
  },
  methods: {
    fun: function(data) {
      console.log(data);
    }
  }
};
</script>
<style lang="stylus" scoped>
#app-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  #cover {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: #fff;
    opacity: 0.6;
    background-image: url('./assets/images/bg.jpg');
  }
}
</style>


