<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="做什么"
      @keyup.enter="addTodo"
    />
    <Item :todo="todo" v-for="(todo) in filteredTodos" :key="todo.id" @del="deleteTodo" />
    <Tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @allComplete="clearAllComplete" />
  </section>
</template>
<script>
import Item from "./item";
import Tabs from "./tabs";
let id = 1;
export default {
  components: { Item, Tabs },
  data() {
    return {
      todos: [
        {
          id: 0,
          content: "this is todo",
          completed: false
        }
      ],
      filter: "all"
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false /*是否完成 */
      });
      e.target.value = "";
    },
    deleteTodo(id) {
      //findIndex fun(currentValue,index,arr)  当条件满足时 返回满足条件的索引 并不会再调用函数
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      console.log(state);
      this.filter = state;
    },
    clearAllComplete() {
      /* 已完成的是 true  取反，完成的被过滤掉 */
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>

<style lang="stylus" scoped>
section {
  width: 1000px;
  margin: 0 auto;
  background: rgba(#fff, 0.7);
  box-shadow: 0 0 10px 1px rgba(#000, 0.3);
  border-radius: 10px;
  padding: 20px;

  input {
    width: 200px;
    background: transparent;
    border: none;
    height: 50px;
    color: #333;
    font-size: 30px;
    padding: 0 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
