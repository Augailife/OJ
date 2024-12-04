import { StoreOptions } from "vuex";
import accessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  actions: {
    async getLoginUser({ commit, state }, payload) {
      const result = await UserControllerService.getLoginUserUsingGet();
      if (result.code === 0) {
        commit("updateLoginUser", result.data);
      } else {
        commit("updateLoginUser", {
          ...state.loginUser,
          role: accessEnum.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateLoginUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
