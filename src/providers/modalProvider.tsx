import React, { useCallback, useMemo, useState } from 'react'

import type { ModalNames } from '@/constants/modals'
import { ModalDataContext } from '@/contexts/modalContexts/modalDataContext'
import { ModalSetterContext } from '@/contexts/modalContexts/modalSetterContext'
import type { Modal, ModalCreating } from '@/types/modal'

interface Props {
  children: React.ReactNode
}

const ModalProvider: React.FC<Props> = ({ children }) => {
  const [modals, setModals] = useState<Modal[]>([])

  const createModal = useCallback(
    (data: ModalCreating) => {
      const modal: Modal = {
        ...data,
        isOpen: false
      }
      setModals((prevModals) => [...prevModals, modal])
    },
    [setModals]
  )

  const toggleModal = useCallback(
    (name: ModalNames) => {
      setModals((prevModals) => {
        const modal = prevModals.find((m) => m.name === name)
        if (modal) modal.isOpen = !modal.isOpen
        return [...prevModals]
      })
    },
    [setModals]
  )

  const clearModals = useCallback(() => {
    setModals([])
  }, [setModals])

  const modalSetterValue = useMemo(() => {
    return { createModal, toggleModal, clearModals }
  }, [setModals, modals])

  return (
    <ModalDataContext.Provider
      value={{
        modals
      }}
    >
      <ModalSetterContext.Provider value={modalSetterValue}>
        {children}
      </ModalSetterContext.Provider>
    </ModalDataContext.Provider>
  )
}

export default ModalProvider
