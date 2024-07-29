import type React from 'react'

import styles from './labelContainer.module.sass'

interface LabelContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  children: React.ReactNode
}

const LabelContainer: React.FC<LabelContainerProps> = ({
  label,
  children,
  ...rest
}) => {
  return (
    <div {...rest}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}

export default LabelContainer
