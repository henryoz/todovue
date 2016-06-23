<template>
  <div>
    <input type="checkbox" @change="toggleTodo(todo)"></input>
    <label :class="{done: todo.done}" v-text="todo.text"></label>
    <button @click="deleteTodo(todo)">Delete</button>
  </div>
</template>

<style>
  .done {
    text-decoration: line-through;
  }

  label {
    font-size: 1.25em;
  }
</style>

<script>
  
  import { toggleTodo, deleteTodo } from '../vuex/actions';

  export default {
    props: ['todo'],
    vuex: {
      actions: {
        toggleTodo,
        deleteTodo
      }
    }
  }
</script>