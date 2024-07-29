import { ModalNames } from '@/constants/modals'

export type ModalType = 'common' | 'confirm'

export interface Modal {
  name: ModalNames
  isOpen: boolean
}

export type ModalCreating = Omit<Modal, 'isOpen'>
