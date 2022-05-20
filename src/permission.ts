import router from "@/router";
import { useUserStore } from "@/stores";
import { whiteListRouters } from "@/config/global";

// 全局路由守卫
router.beforeEach(async (to, from, next) => {
  const { token, userInfo, signOut, getUserInfo } = useUserStore();

  if (token) {
    if (to.path === "/login") {
      //  执行退出登录操作
      signOut();
    } else {
      // 检查是否有 UserInfo
      const { roles } = userInfo;

      if (roles.length) {
        // 已经登录并且有用户组了
        next();
      } else {
        // 获取 userInfo
        const { roles } = await getUserInfo();
        // 动态加载路由
        next();
      }
    }
  } else {
    if (whiteListRouters.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
