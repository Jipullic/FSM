import clsx from 'clsx'
import { memo, useEffect, useState } from 'react'
import React from 'react'

import CloseButton from '@/components/baseElements/buttons/closeButton'
import type { ModalNames } from '@/constants/modals'
import useModalSetterContext from '@/hooks/useModalContexts/useModalSetterContext'
import useToggleHidden from '@/hooks/useToggleHidden'
import type { ModalType } from '@/types/modal'

import styles from './modal.module.sass'

export interface ModalProps {
  name: ModalNames
  type: ModalType
  title?: string
  isOpen: boolean
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  name,
  type,
  title,
  isOpen,
  children
}) => {
  const { toggleModal } = useModalSetterContext()
  const [modalRef, toggleHidden, isHidden] = useToggleHidden<HTMLDivElement>()
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen === isHidden) {
      if (!isOpen) {
        setIsClosing(true)
        setTimeout(() => {
          toggleHidden()
          setIsClosing(false)
        }, 500)
      } else toggleHidden()
    }
  }, [isOpen, isHidden, toggleHidden, setIsClosing])

  const overlayStyle = clsx(styles['modal-overlay'], 'hidden')

  const containerStyle = clsx(
    styles['modal-container'],
    type === 'confirm' && styles['modal-container-confirm'],
    isClosing ? 'animate-zoom-out-center' : 'animate-zoom-in-center'
  )

  const headerStyle = clsx(
    styles['modal-header'],
    type === 'confirm' && styles['modal-header-confirm']
  )

  return (
    <div className={overlayStyle} ref={modalRef}>
      <div className={containerStyle}>
        <div className={styles['modal-content']}>
          <div className={headerStyle}>
            <h3 className={styles['modal-title']}>{title}</h3>
            <CloseButton
              className={styles['modal-close-button']}
              onClick={() => toggleModal(name)}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default memo(Modal)
