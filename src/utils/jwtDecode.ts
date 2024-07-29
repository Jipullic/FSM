import { jwtDecode as jwtDecodeLib } from 'jwt-decode'

export const jwtDecode = <T>(token: string): T | null => {
  try {
    return jwtDecodeLib<T>(token)
    // const payload = token.split('.')[1]
    // // return jwtDecode<T>(payload)
    // return JSON.parse(atob(payload)) as T
  } catch (e) {
    return null
  }
}
