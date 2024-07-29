import type { AxiosError } from 'axios'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from '@/components/elements/button/button'
import Input from '@/components/elements/input/input'
import ALERTS_MESSAGES from '@/constants/alertsMessages'
import PATHS from '@/constants/routesPaths'
import useAlertSetterContext from '@/hooks/useAlertContexts/useAlertSetterContext'
import useAuthContext from '@/hooks/useAuthContext'
import { auth } from '@/services/api/auth'

interface LoginFormInputs {
  username: string
  password: string
}

const LoginForm: React.FC = () => {
  const { signIn } = useAuthContext()
  const { addAlert } = useAlertSetterContext()
  const location = useLocation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm<LoginFormInputs>()

  const onSubmit: SubmitHandler<LoginFormInputs> = async (
    data: LoginFormInputs
  ) => {
    let accessToken: string

    try {
      accessToken = await auth(data)
    } catch (e) {
      const error = e as AxiosError
      if (error.response?.status === 401) addAlert(ALERTS_MESSAGES.loginError)
      else addAlert(ALERTS_MESSAGES.serverError)
      return
    }

    signIn(accessToken)
    navigate(location.state?.from?.pathname ?? PATHS.home)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col gap-1 p-1'
    >
      <Input
        formRegister={register('username', {
          required: true
        })}
        placeholder='Логин'
      ></Input>
      <Input
        type='password'
        formRegister={register('password', {
          required: true
        })}
        placeholder='Пароль'
      />
      <Button buttonStyle='primary'>Войти</Button>
    </form>
  )
}

export default LoginForm
