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
}

.completed {
  background: red;
}
</style>

