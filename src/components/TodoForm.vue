<template>
  <form @submit.prevent="addTodo" class="todo-form">
    <input v-model="newTodo" placeholder="Add a new task" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/todoList";

const todoStore = useTodoStore();
const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todoStore.addTodo({
      text: newTodo.value,
      completed: false,
    });
    newTodo.value = "";
  }
};
</script>
<style scoped>
.todo-form {
  margin-bottom: 20px;
}

.input-field {
  padding: 8px;
  width: 70%;
  margin-right: 10px;
  font-family: "Arial", sans-serif;
}

.add-button {
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: "Arial", sans-serif;
}
</style>
