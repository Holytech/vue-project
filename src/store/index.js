import { createStore } from "vuex";

const store = new createStore({
  state: {
    selectedRepo: {},
  },
  mutations: {
    SET_REPO(state, repo) {
      state.selectedRepo = repo;
    },
  },
  getters: {
    selectedRepo: (state) => state.selectedRepo,
  },
});

export default store;
