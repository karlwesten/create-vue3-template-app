const TOKEN_NAME: string = "admin-token";

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_NAME);
}

export function setToken(value: string): void {
  localStorage.setItem(TOKEN_NAME, value);
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_NAME);
}
