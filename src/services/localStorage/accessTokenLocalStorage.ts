import { LOCAL_STORAGE_ACCESS_TOKEN } from '@/constants/localStorageKeys'

export function setAccessToken(token: string) {
  localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, token)
}

export function getAccessToken(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN)
}

export function removeAccessToken() {
  localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN)
}
