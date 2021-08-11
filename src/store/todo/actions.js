import axios from "axios";

export async function fetchTodos({ commit }) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  commit("setTodos", response.data);
}
export async function addTodo({ commit }, title) {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    { title, completed: false }
  );

  commit("newTodo", response.data);
}
export async function deleteTodo({ commit }, id) {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

  commit("removeTodo", id);
}
export async function filterTodos({ commit }, e) {
  // Get selected number
  const limit = parseInt(
    e.target.options[e.target.options.selectedIndex].innerText
  );

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
  );

  commit("setTodos", response.data);
}
export async function updateTodo({ commit }, updTodo) {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
    updTodo
  );

  console.log(response.data);

  commit("updateTodo", response.data);
}
