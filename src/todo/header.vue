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
      titlex: "Cieme\xa0\xa0Todo"
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
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  text-transform: uppercase;
  color: #fff;

  h1 {
    font-size: 50px;
  }
}
</style>

