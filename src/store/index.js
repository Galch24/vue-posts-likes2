import { createStore } from "vuex";
import { posts } from "@/store/posts";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    post: posts,
  },
});
