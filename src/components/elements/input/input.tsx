import clsx from 'clsx'
import React, { type InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import styles from './input.module.sass'

export type InputStyle = 'common' | 'form' | 'form-error'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputStyle?: InputStyle
  formRegister?: UseFormRegisterReturn
}

const Input: React.FC<InputProps> = ({
  inputStyle = 'common',
  formRegister,
  ...rest
}) => {
  const style = clsx({
    [styles['form-input']]: inputStyle == 'form' || inputStyle == 'form-error',
    [styles['form-input-error']]: inputStyle == 'form-error',
    [styles.input]: inputStyle == 'common'
  })

  return <input className={style} {...rest} {...formRegister} />
}

export default Input
