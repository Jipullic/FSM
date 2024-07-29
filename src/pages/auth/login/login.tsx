import React from 'react'
import { Navigate } from 'react-router-dom'

import LogoImage from '@/components/elements/images/logo/logo'
import LoginForm from '@/components/forms/loginForm/loginForm'
import PATHS from '@/constants/routesPaths'
import { getAccessToken } from '@/services/localStorage/accessTokenLocalStorage'

import styles from './login.module.sass'

const Login: React.FC = () => {
  if (getAccessToken() !== null) {
    return <Navigate to={PATHS.home} replace></Navigate>
  }

  return (
    <div className={styles['login-container']}>
      <div className={styles['left-login']}>
        <div className={styles['login-form']}>
          <LogoImage className={styles.logo} />
          <LoginForm></LoginForm>
        </div>
      </div>
      <div className={styles['right-photo']}></div>
    </div>
  )
}

export default Login
