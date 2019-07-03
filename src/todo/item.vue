<template>
  <div :class="['todo-item',todo.completed ? 'completed':'']">
    <input type="checkbox" class="toggle" v-model="todo.completed" />
    <label for>{{todo.content}}</label>
    <button class="destroy" @click="deleteTodo">删除</button>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {}
  }
};
</script>
<style lang="stylus" scoped>
div {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
}

input {
  vertical-align: middle;

  &[type='checkbox'] {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 100%;
    appearance: none;
    -webkit-appearance: none;

    &:checked {
      background: #000;
    }
  }
}

.todo-item {
  font-size: 24px;
  color: #444;
}

.completed {
  background: #fff;
}

button {
  float: right;
  height 30px
  padding 0 20px
  background rgba(#fff,0.2)
  border none
  border-radius 3px
  border 1px solid #3f3f3f*2
  margin-top 10px
}
</style>

