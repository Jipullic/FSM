import axios, {
  type InternalAxiosRequestConfig,
  type AxiosInstance,
  type AxiosError
} from 'axios'

import { API } from '@/configs/axiosConfig'
import URLS from '@/constants/apiUrls'
import PATHS from '@/constants/routesPaths'
import { type LoginCredentials } from '@/types/auth'

/**
 * Sets the authorization header in the given Axios instance or configuration.
 *
 * @param {AxiosInstance | InternalAxiosRequestConfig} instanceOrConfig - The Axios instance or configuration to set the authorization header for.
 * @param {string} accessToken - The access token to be included in the authorization header.
 */
export const setAuthorizationHeader = (
  instanceOrConfig: AxiosInstance | InternalAxiosRequestConfig,
  accessToken: string
) => {
  const instance =
    'defaults' in instanceOrConfig
      ? instanceOrConfig.defaults
      : instanceOrConfig
  instance.headers.Authorization = `Bearer ${accessToken}`
}

/**
 * Authenticate the user with the provided credentials.
 *
 * @param {LoginCredentials} data - The login credentials of the user.
 * @return {Promise<string>} The authentication access token.
 * @throws {AxiosError} If authentication fails or server error.
 */
export async function auth(data: LoginCredentials): Promise<string> {
  const response = await API.post<string>(URLS.auth.login, {
    username: data.username,
    password: data.password
  })

  return response.data
}

/**
 * Refresh the authentication token.
 *
 * @return {Promise<string>} The refreshed authentication access token.
 */
export async function refresh(): Promise<string> {
  const response = await axios.post<string>(PATHS.api + '/' + URLS.auth.refresh)
  return response.data
}

/**
 * Logs out the user by making a POST request to the logout endpoint.
 *
 * @return {Promise<void>} A promise that resolves when the logout request is complete.
 */
export async function logout() {
  await axios.post<string>(PATHS.api + '/' + URLS.auth.logout)
}
