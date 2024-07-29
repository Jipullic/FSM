import { memo, useEffect, useRef } from 'react'
import React from 'react'

import Modal, { type ModalProps } from '@/components/overlays/modal/modal'
import useModalDataContext from '@/hooks/useModalContexts/useModalDataContext'
import useModalSetterContext from '@/hooks/useModalContexts/useModalSetterContext'

type Props = Omit<ModalProps, 'isOpen'>

const ModalContainer: React.FC<Props> = ({ name, type, title, children }) => {
  const { createModal } = useModalSetterContext()
  const { modals } = useModalDataContext()
  const isCreate = useRef(false)

  useEffect(() => {
    // because when dev mode is enabled then useEffect will be called twice
    if (!isCreate.current) {
      isCreate.current = true
      createModal({ name })
    }
  }, [])

  const modal = modals.find((m) => m.name === name)
  if (!modal) return <></>

  return (
    <Modal name={name} type={type} title={title} isOpen={modal.isOpen}>
      {children}
    </Modal>
  )
}

export default memo(ModalContainer)
