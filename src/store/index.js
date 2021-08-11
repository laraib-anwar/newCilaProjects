import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import todo from "./todo";

//Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      todo,
    },

    strict: process.env.DEV,
  });

  return Store;
}
