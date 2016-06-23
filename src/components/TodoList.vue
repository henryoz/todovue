<template>
  <div id="todos-list">
    <div id="list-header">
      <h2 @>Todos</h2>
    </div>
    <div>
      <ul>
          <todo v-for="todo in todos" :todo="todo"></todo>
      </ul>
      <button v-show="todos.length > 0" @click="clearCompleted">Clear completed</button>
    </div>
  </div>
  <input
    autofocus
    @keyup.enter="initAddTodo">
</template>

<script>
import Todo from './Todo.vue';
import { addTodo, clearCompleted } from '../vuex/actions';

export default {
  components: { Todo },
  data() {
    return {
      show: 'active',
    }
  },
  vuex: {
    getters: {
      todos: state => state.todos
    },
  actions: {
    addTodo,
    clearCompleted
  }
  },
  methods: {
    initAddTodo(e) {
      let text = e.target.value;
      if (text.trim()) {
        this.addTodo(text);
      }
      e.target.value = '';
    }
  }
}

</script>