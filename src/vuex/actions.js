export const addTodo = ({ dispatch }, text) => {
  dispatch('ADD_TODO', text);
}

export const deleteTodo = ({ dispatch }, todo) => {
  dispatch('DELETE_TODO', todo);
}

export const toggleTodo = ({ dispatch }, todo) => {
  dispatch('TOGGLE_TODO', todo);
}

export const editTodo = ({ dispatch }, e) => {
  dispatch('EDIT_TODO', e.target.value);
}

export const clearCompleted = ({ dispatch }) => {
  dispatch('CLEAR_COMPLETED');
}