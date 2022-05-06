import { defineStore } from "pinia";
import { getCookie } from "@/utils/cookie";
import { userLogin } from "@/api/user";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    userInfo: {}
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++;
    },
    setUserInfo(userInfo: object) {
      this.userInfo = userInfo;
    },
    registerUser() {
      return userLogin({ token: getCookie() });
    }
  }
});
