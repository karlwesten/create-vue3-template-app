import { instance } from "@/utils/request";

export function userLogin(params: object) {
  return {
    name: '张三',
    age: 18
  }
  // return instance({
  //   url: "/api/user/login",
  //   method: "post",
  //   data: params
  // });
}
