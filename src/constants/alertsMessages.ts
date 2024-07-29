import type { AlertAdding } from '@/types/alert'

// TODO: make types
interface AlertMessagesConfig {
  [key: string]: AlertMessagesConfig | AlertAdding
}

const ALERTS_MESSAGES: AlertMessagesConfig = {
  serverError: {
    message: 'Ошибка сервера. Попробуйте позже',
    type: 'error'
  },
  loginError: {
    message: 'Неверный логин или пароль',
    type: 'error'
  },
  noSelectedRows: {
    message: 'Выберите строку для действия',
    type: 'info'
  },
  orientationInfo: {
    message: 'Попробуйте повернуть устройство горизонтально',
    type: 'info'
  },
  crud: {
    successfulAdding: {
      message: 'Данные успешно добавлены',
      type: 'success'
    },
    unsuccessfulAdding: {
      message: 'Не удалось добавить данные',
      type: 'error'
    },
    successfulPatch: {
      message: 'Данные успешно обновлены',
      type: 'success'
    },
    unsuccessfulPatch: {
      message: 'Не удалось обновить данные',
      type: 'error'
    },
    successfulDeleting: {
      message: 'Данные успешно удалены',
      type: 'success'
    },
    unsuccessfulDeleting: {
      message: 'Не удалось удалить',
      type: 'error'
    }
  }
}

export const DEFAULT_ALERT_MESSAGE: Partial<AlertAdding> = {
  durationSeconds: 3
}

export default ALERTS_MESSAGES
