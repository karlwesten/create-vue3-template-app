import { instance } from "@/utils/request";

interface Res {
  token: string;
}

export function userLogin(): Promise<Res> {
  return new Promise((resolve, reject) => {
    resolve({ token: "123456" });
  });
}
