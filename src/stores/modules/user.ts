import { defineStore } from "pinia"; // 定义一个状态
import { getToken, setToken, removeToken } from "@/utils/auth";

// defineStore 参数签名：
// id: 唯一名称
// options: 选项
export const useUserStore = defineStore("user", {
  // 变量
  state: () => {
    return {
      token: getToken(),
      userInfo: {
        roles: <Array<string>>[]
      }
    };
  },

  // 计算属性
  getters: {},

  // 方法
  actions: {
    login() {
      // 真实登录流程
      setToken("123");
    },

    getUserInfo() {
      this.userInfo.roles = ["admin"];
      return this.userInfo;
    },

    signOut() {
      removeToken();
    }
  }
});
