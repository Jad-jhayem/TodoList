<script setup>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
import { useTodoStore } from "../stores/todoList";

const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form />
    <todo-list />
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #3a506b;
  color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

h1 {
  text-align: center;
  color: #e84545;
}
</style>
