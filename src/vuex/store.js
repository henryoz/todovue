import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// the initial state object
const state = {
  todos: []
};

// All possible mutations (actions) that can be applied to the state.
// Not the best terminology considering we're striving for immutability
// but it's what the official docs call them!
const mutations = {

  ADD_TODO(state, text) {
    const newTodo = {
      text: text,
      done: false  
    };
    state.todos.push(newTodo);
  },

  DELETE_TODO(state, todo) {
    state.todos.$remove(todo);
  },

  TOGGLE_TODO(state, todo) {
    todo.done = !todo.done;
  },

  EDIT_TODO(state, todo, text) {
    todo.text = text;
  },

  CLEAR_COMPLETED(state) {
    state.todos = state.todos.filter(todo => !todo.done);
  }

};

export default new Vuex.Store({
  state,
  mutations
});
