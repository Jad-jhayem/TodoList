<template>
  <ul class="todo-list">
    <li v-for="(todo, index) in todos" :key="index" class="todo-item">
      <input type="checkbox" v-model="todo.completed" class="todo-checkbox" />
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <button @click="removeTodo(index)" class="remove-button">Remove</button>
    </li>
  </ul>
</template>

<script setup>
import { useTodoStore } from "../stores/todoList";

const todoStore = useTodoStore();
const todos = todoStore.todos;

const removeTodo = (index) => {
  todoStore.removeTodo(index);
};

const toggleComplete = (index) => {
  todoStore.toggleComplete(index);
};
</script>

<style scoped>
.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background-color: rgb(40, 40, 150);
  border: 1px solid #ddd;
  border-radius: 4px;
}

.todo-checkbox {
  margin-right: 10px;
}

.todo-text {
  margin-right: 10px;
  font-family: "Verdana", sans-serif;
  color: #e84545;
}

.completed {
  text-decoration: line-through;
}

.remove-button {
  margin-left: auto;
  padding: 8px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
