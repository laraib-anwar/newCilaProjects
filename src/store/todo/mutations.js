export function setTodos(state, todos) {
  return (state.todos = todos);
}

export function newTodo(state, todo) {
  return state.todos.unshift(todo);
}

export function removeTodo(state, todo) {
  return state.todos.filter((todo) => todo.id !== id);
}

export function setTodos(state, todos) {
  const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
  if (index !== -1) {
    return state.todos.splice(index, 1, updTodo);
  }
}

// const mutations = {
//   setTodos: (state, todos) => (state.todos = todos),
//   newTodo: (state, todo) => state.todos.unshift(todo),
//   removeTodo: (state, id) =>
//     (state.todos = state.todos.filter((todo) => todo.id !== id)),
//   updateTodo: (state, updTodo) => {
//     const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
//     if (index !== -1) {
//       state.todos.splice(index, 1, updTodo);
//     }
//   },
// };
