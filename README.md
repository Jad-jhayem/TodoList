#Vue.js TodoList with Pinia

A simple TodoList application built with Vue.js and Pinia for state management.
Project Overview

This project implements a basic TodoList application where users can add, mark as complete, and remove tasks. The application is built using Vue.js for the frontend and Pinia for state management.
Features

    Add new tasks to the TodoList.
    Mark tasks as complete.
    Remove tasks from the TodoList.

Project Structure

The project structure is organized as follows:

    components/: Contains Vue components for the TodoList app.
        TodoApp.vue: The main component rendering the TodoList app.
        TodoForm.vue: Component for adding new tasks.
        TodoList.vue: Component for displaying and managing tasks.
    stores/: Contains the Pinia store (todoList.js) for managing the application state.

Getting Started

    Clone the repository:

bash

git clone https://github.com/your-username/vue-pinia-todolist.git
cd vue-pinia-todolist

    Install dependencies:

bash

npm install

    Run the application:

bash

npm run serve

Visit http://localhost:8080 in your browser to see the TodoList app in action.
Usage

    Add a new task:
        Type the task in the input field in the "Add a new task" section.
        Click the "Add" button.

    Mark as complete:
        Check the checkbox next to a task to mark it as complete.

    Remove a task:
        Click the "Remove" button next to a task to remove it from the list.

Technologies Used

    Vue.js
    Pinia
