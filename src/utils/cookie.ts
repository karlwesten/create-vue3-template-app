import Cookies from "js-cookie";

const title = "X-Token";

export function setCookie(token: string): void {
  Cookies.set(title, token);
}

export function getCookie(): string {
  return <string>Cookies.get(title);
}
