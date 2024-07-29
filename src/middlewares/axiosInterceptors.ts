import { AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PATHS from '@/constants/routesPaths'
import useAuthContext from '@/hooks/useAuthContext'
import { logout, refresh, setAuthorizationHeader } from '@/services/api/auth'

interface Props {
  axiosInstance: AxiosInstance
}

type FailedRequestQueue = {
  onSuccess: () => void
  onFailure: () => void
}

const AxiosInterceptorSetup: React.FC<Props> = ({ axiosInstance }) => {
  const { signIn, signOut } = useAuthContext()
  const navigate = useNavigate()
  const [handleFailedRequestsQueue, executeHandleFailedRequestsQueue] =
    useReducer((v) => !v, false)
  const [isSuccessfulRefreshing, setIsSuccessfulRefreshing] =
    useState<boolean>(false)
  const [failedRequestsQueue, setFailedRequestsQueue] = useState<
    FailedRequestQueue[]
  >([])

  useEffect(() => {
    failedRequestsQueue.forEach(({ onSuccess, onFailure }) => {
      if (isSuccessfulRefreshing) onSuccess()
      else onFailure()
    })

    setFailedRequestsQueue([])
  }, [handleFailedRequestsQueue])

  useEffect(() => {
    // Используется как локальная переменная по причине скорости изменения useState (если придут одновременно 2 и
    // более запроса то они прошли бы не туда куда надо при проверке на !isRefreshing)
    let isRefreshing = false

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        if (axiosInstance.defaults.headers.Authorization) {
          const originalRequestConfig = error.config

          if (error.response?.status === 401 && originalRequestConfig) {
            if (!isRefreshing) {
              isRefreshing = true
              try {
                const newAccessToken = await refresh()
                signIn(newAccessToken)
                setAuthorizationHeader(originalRequestConfig, newAccessToken)
                setIsSuccessfulRefreshing(true)
                return axiosInstance(originalRequestConfig)
              } catch (axiosError) {
                signOut()
                await logout()
                navigate(PATHS.login)
                setIsSuccessfulRefreshing(false)
              } finally {
                isRefreshing = false
                executeHandleFailedRequestsQueue()
              }
            } else {
              return new Promise((resolve, reject) => {
                setFailedRequestsQueue((prev) => [
                  ...prev,
                  {
                    onSuccess: () => {
                      resolve(axiosInstance(originalRequestConfig))
                    },
                    onFailure: () => {
                      reject(error)
                    }
                  }
                ])
              })
            }
          }
        }
        return Promise.reject(error)
      }
    )

    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor)
    }
  }, [axiosInstance, navigate, signIn, signOut])

  return null
}

export default AxiosInterceptorSetup
