import React, { useEffect, useRef, type InputHTMLAttributes } from 'react'

import styles from './checkbox.module.sass'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate: boolean
}

const Checkbox: React.FC<Props> = ({ indeterminate, ...rest }) => {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (ref && typeof ref === 'object' && 'current' in ref && ref.current)
      ref.current.indeterminate = !rest.checked && indeterminate
  }, [ref, indeterminate])

  return (
    <input className={styles.checkbox} type='checkbox' ref={ref} {...rest} />
  )
}

export default Checkbox
