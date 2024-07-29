import { type SingleValue } from 'react-select'

export type SelectOptionAllowTypes = object | string | number

export interface SelectOption<TOption extends SelectOptionAllowTypes> {
  value: TOption
  label: string
}

export function isSingleValueSelect<TOption extends SelectOptionAllowTypes>(
  singleValue: any
): singleValue is SingleValue<SelectOption<TOption>> {
  return (
    typeof singleValue === 'object' &&
    singleValue !== null &&
    'value' in singleValue &&
    'label' in singleValue
  )
}

export function isSelectOption<TSelectOption extends SelectOptionAllowTypes>(
  selectOption: any
): selectOption is SelectOption<TSelectOption> {
  return (
    typeof selectOption === 'object' &&
    selectOption !== null &&
    'value' in selectOption &&
    'label' in selectOption
  )
}
