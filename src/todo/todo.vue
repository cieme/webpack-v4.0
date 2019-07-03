<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="做什么"
      @keyup.enter="addTodo"
    />
    <item :todo="todo" />
    <tabs :filter="filter" />
  </section>
</template>
<script>
import item from "./item";
import tabs from "./tabs";
export default {
  components: { item, tabs },
  data() {
    return {
      todo: {
        id: 0,
        content: "this is todo",
        completed: false
      },
      filter: "all"
    };
  },
  methods: {
    addTodo() {}
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
