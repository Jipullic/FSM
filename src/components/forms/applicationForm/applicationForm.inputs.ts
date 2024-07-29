import type { FormInputsConfig } from '@/components/forms/baseForm/baseForm/baseForm.types'
import { type Application } from '@/types/services/application'
import { statusNames } from '@/utils/enum/enumNames/enumNames'
import { getOptionsFromEnum } from '@/utils/enum/getOptionsFromEnum'

export const statusOptions = getOptionsFromEnum(statusNames)

// TODO: проверка даты начала и конца
export const applicationFormInputsConfig: FormInputsConfig<Application> = {
  id: {
    label: 'ID',
    placeholder: 'ID',
    createSettings: {
      status: 'hide'
    },
    updateSettings: {
      status: 'disabled'
    }
  },
  createDate: {
    label: 'Дата создания',
    placeholder: 'Дата создания',
    createSettings: {
      status: 'hide'
    },
    updateSettings: {
      status: 'disabled'
    }
  },
  startPoint: {
    label: 'Начальная точка',
    placeholder: 'Санкт-Петербург'
  },
  endPoint: {
    label: 'Конечная точка',
    placeholder: 'Москва'
  },
  startDate: {
    label: 'Дата начала',
    placeholder: '16.07.2024 23:59',
    type: 'date'
  },
  endDate: {
    label: 'Дата конца',
    placeholder: '16.07.2024 23:59',
    type: 'date'
  },
  fuelLimit: {
    label: 'Лимит топлива (л)',
    placeholder: '2.5',
    type: 'float'
  },
  fuelConsumption: {
    label: 'Расход топлива (л)',
    placeholder: '2.5',
    type: 'float'
  },
  costPerKm: {
    label: 'Себестоимость километра (руб/км)',
    placeholder: '2.5',
    type: 'float'
  },
  status: {
    label: 'Статус заявки',
    placeholder: 'Выполнена',
    type: 'select',
    selectOptions: {
      placeholder: 'Статус заявки',
      // isMulti: true,
      options: statusOptions
    }
  }
}
