import { Status } from '@/types/services/application'

import { getEnumNames } from './getEnumNames'

export const statusNames = getEnumNames(Status, {
  notCompleted: 'Не выполнена',
  completed: 'Выполнена'
})
