<template>
  <div id="test">
    <div>{{text}}</div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      text: "return data xxxx这是APP.VUE的文字"
    };
  }
};
</script>
<style>
#test {
  color: red;
}
</style>


