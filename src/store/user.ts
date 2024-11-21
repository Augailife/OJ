import { StoreOptions } from "vuex";
import accessEnum from "@/access/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: accessEnum.NOT_LOGIN,
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
