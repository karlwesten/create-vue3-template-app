import { defineStore } from "pinia";
interface UserInfo {
  roles: Array<string>
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: '',
    userInfo: {
      roles: []
    }
  }),
  getters: {},
  actions: {
    getUserInfo(): void {
      this.userInfo.roles = ["admin"];
    }
  }
});
