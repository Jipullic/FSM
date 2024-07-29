import { type ColumnDef } from '@tanstack/react-table'

import { Status, type Application } from '@/types/services/application'
import { statusNames } from '@/utils/enum/enumNames/enumNames'
import {
  type TableSelection,
  type GenerateTableColumnsResult,
  generateTableColumns
} from '@/utils/table/generateTableColumns'

export type ApplicationColumnsType = Application & TableSelection

const applicationTableHeaders: Record<keyof ApplicationColumnsType, string> = {
  select: 'select',
  id: 'id',
  startPoint: 'Начальный пункт',
  endPoint: 'Конечный пункт',
  startDate: 'Дата начала',
  endDate: 'Дата окончания',
  fuelLimit: 'Лимит топлива',
  fuelConsumption: 'Расход топлива',
  costPerKm: 'руб/км',
  createDate: 'дата создания',
  status: 'Статус'
}

const handleApplicationColumn = (
  key: keyof ApplicationColumnsType
): GenerateTableColumnsResult<ApplicationColumnsType> => {
  switch (key) {
    case 'status':
      return {
        accessorKey: key,
        header: () => applicationTableHeaders[key],
        cell: (info) => {
          const status = info.getValue() as Status
          return statusNames[status]
        }
      } as ColumnDef<ApplicationColumnsType>

    default:
      return null
  }
}

export const applicationColumns = generateTableColumns<ApplicationColumnsType>(
  applicationTableHeaders,
  handleApplicationColumn
)
