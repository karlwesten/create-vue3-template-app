import router from "@/router";
import { storeToRefs } from 'pinia'
import { whiteListRouters } from "@/config/global";
import { useUserStore } from "@/stores/user";

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // Q: 首先判断是否在白名单内还是 token 存在？
    // A: 首先应该判断 token 是否存在，因为有可能白名单内需要 token 等资源

    // Q: token 来自哪里？ token 存储在哪里？
    // A: token 存在 Cookie 中，或者存在 LocalStorage 中
    // A1: 存在 Cookie 中好处：每次浏览器与服务通讯都会带上 token，如果后端每次要验证 token 的话适合放在 Cookie 中。缺点：Cookie 大小有限制，容易受到 CSRF 攻击
    // A2: 存在 LocalStorage 中的好处：只要不是使用 JavaScript 或者用户主动删除，存储的数据将会一直存在。缺点：任何 JavaScript 都可以控制 LocalStorage，也就是 XSS 攻击
    const userStore = useUserStore();
    const { token, userInfo } = storeToRefs(userStore);

    if (token) {
        if (to.path === 'login') {
            //  执行退出登录操作
        } else {
            // 检查是否有 UserInfo
            const { roles } = userInfo;

            if (roles.length) {
                // 已经登录并且有用户组了
                next();
            } else {
                // 获取 userInfo
                userStore.getUserInfo();

                // 动态加载路由

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
