<template>
  <div class="helper">
    <span class="left">2 items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter===state?'actived':'']"
        @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="claarAll">删除全部</span>
  </div>
</template>
<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  methods: {
    claarAll() {},
    toggleFilter() {}
  }
};
</script>
<style lang="stylus" scoped>
.left {
  float: left;
}

div {
  text-align: center;

  span {
    display: inline-block;
    padding: 0 10px;
  }
}

.clear {
  float: right;
}
</style>


