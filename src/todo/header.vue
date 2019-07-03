<template>
  <header class="main-header">
    <h1 v-on:click="sendMsgParent">{{titlex}}</h1>
  </header>
</template>
<script>
export default {
  name: "oheader",
  data() {
    return {
      titlex: "CiemeTodo"
    };
  },
  methods: {
    sendMsgParent: function() {
      this.$emit("lis", "这是header.vue子组件的值");
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-header {
  text-align: center;

  h1 {
    font-size: 50px;
  }
}
</style>

