import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

import type { SelectProps } from '@/components/elements/select/select'
import type { SelectOptionAllowTypes } from '@/components/elements/select/select.types'

export type FormInputType = 'text' | 'number' | 'float' | 'date' | 'select'
export type ActionStatus = 'enabled' | 'disabled' | 'hide'
export type FormType = 'create' | 'update'

interface MethodSetting {
  status: ActionStatus
}

export interface FormInputConfig<
  TFieldValues extends FieldValues,
  TSelectOption extends SelectOptionAllowTypes = any
> {
  label: string
  placeholder: string
  type?: FormInputType
  createSettings?: MethodSetting
  updateSettings?: MethodSetting
  gridColumn?: number
  formOptions?: RegisterOptions<TFieldValues>
  selectOptions?: SelectProps<TSelectOption>
}

export type FormInputsConfig<TFieldValues extends FieldValues> = Record<
  Path<TFieldValues>,
  FormInputConfig<TFieldValues>
>
