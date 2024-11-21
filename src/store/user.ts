import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "",
    },
  }),
  actions: {
    getLoginUser({ commit }, payload) {
      commit("updateLoginUser", payload);
    },
  },
  mutations: {
    updateLoginUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
