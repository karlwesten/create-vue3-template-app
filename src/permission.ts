import router from "@/router";
import { getCookie } from "@/utils/cookie";
import { useCounterStore } from "@/stores/counter";

const whitelist = ["Login"];

router.beforeEach((to, from, next) => {
  if (whitelist.includes(<string>to.name)) {
    next();
  } else {
    const counter = useCounterStore();
    if (JSON.stringify(counter.userInfo) === "{}") {
      if (getCookie()) {
        const res = counter.registerUser();
        counter.setUserInfo(res);
        next();
      } else {
        next({ name: "Login" });
      }
    } else {
      next();
    }
  }
});
