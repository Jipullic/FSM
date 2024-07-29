import clsx from 'clsx'
import React, { type ButtonHTMLAttributes } from 'react'

import styles from './button.module.sass'

type ButtonStyle = 'primary' | 'secondary' | ''

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  buttonStyle: ButtonStyle
}

const Button: React.FC<Props> = ({ children, buttonStyle, ...rest }) => {
  const style = clsx(
    styles.button,
    {
      [styles.primary]: buttonStyle === 'primary',
      [styles.secondary]: buttonStyle === 'secondary'
    },
    rest.className
  )
  delete rest.className

  return (
    <button className={style} {...rest}>
      {children}
    </button>
  )
}

export default Button
