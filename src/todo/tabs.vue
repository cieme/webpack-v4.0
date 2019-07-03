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
  background: #ff0000 * 0.75;
  color: #fff;
  line-height: 30px;
  border-radius: 3px;
  cursor: pointer;
}

.tabs span {
  margin: 0 20px;
  cursor: pointer;
  text-transform uppercase
  &:hover, &.actived {
    background: #fff;
    line-height: 30px;
    padding: 0 10px;
    border-radius: 3px;
    box-shadow: 0 0 5px 1px rgba(#000, 0.2);
  }
}
</style>


