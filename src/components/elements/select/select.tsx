import React, { forwardRef, type Ref } from 'react'
import ReactSelect from 'react-select'
import { type Props as StateManagerProps } from 'react-select'

import type { SelectOption, SelectOptionAllowTypes } from './select.types'
import { selectStyles } from './selectStyles'

export type SelectProps<TOption extends SelectOptionAllowTypes> =
  StateManagerProps<SelectOption<TOption>>

// `${twColors?.slate["400"]}60 !important`

const SelectDefinition = <TOption extends SelectOptionAllowTypes>(
  props: SelectProps<TOption>,
  ref: Ref<any>
) => {
  return (
    <ReactSelect
      ref={ref}
      styles={selectStyles}
      isClearable={true}
      isSearchable={true}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? 'Список пуст' : 'Не найдено'
      }
      {...props}
    />
  )
}

const Select = forwardRef(SelectDefinition) as <
  TOption extends SelectOptionAllowTypes
>(
  props: SelectProps<TOption> & { ref?: Ref<any> }
) => JSX.Element

export default Select
