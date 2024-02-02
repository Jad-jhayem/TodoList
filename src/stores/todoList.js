import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  /*State
    action
    getter*/
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleComplete(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
  },
});
