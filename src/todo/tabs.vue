<template>
  <div class="helper">
    <span class="left">{{unShifttodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter===state?'actived':'']"
        @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAll">ClearAllCompleted</span>
  </div>
</template>
<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  computed: {
    // Array.filter()
    unShifttodoLength() {
      return this.todos.filter(todo => !todo.computed).length;
    }
  },
  methods: {
    clearAll() {
      this.$emit("allComplete");
    },
    toggleFilter(state) {
      this.$emit("toggle", state);
    }
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
  text-transform: uppercase;
  padding: 0 10px;
  line-height: 30px;
  border-radius: 3px;

  &.actived {
    background: #fff;
    box-shadow: 0 0 5px 1px rgba(#000, 0.2);
  }

  &:hover {
    background: rgba(#000, 0.5);
    color: #fff;
  }
}
</style>


