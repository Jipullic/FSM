import { useEffect, useState } from 'react'
import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'
import type { GroupBase, OptionsOrGroups } from 'react-select'

import Select, { type SelectProps } from '@/components/elements/select/select'
import {
  isSelectOption,
  isSingleValueSelect,
  type SelectOption,
  type SelectOptionAllowTypes
} from '@/components/elements/select/select.types'

interface Props<
  TSelectOption extends SelectOptionAllowTypes,
  TFieldValues extends FieldValues
> {
  name: Path<TFieldValues>
  selectOptions: SelectProps<TSelectOption>
  formOptions?: RegisterOptions<TFieldValues>
}

function findOption<TSelectOption extends SelectOptionAllowTypes>(
  options: OptionsOrGroups<
    SelectOption<TSelectOption>,
    GroupBase<SelectOption<TSelectOption>>
  >,
  value: any
): SelectOption<TSelectOption> {
  for (const option of options) {
    if (isSelectOption(option)) {
      if (option.value == value) return option
    } else {
      const found = findOption(option.options, value)
      if (found) return found
    }
  }
  return undefined
}

/**
 * Важно, при установке значения контроллера извне поиск производится по значениям, то есть если будет 2 одинаковых значения или более, то будет выбран первый
 *
 * @template TSelectOption - The type of the select options.
 * @template TFieldValues - The type of the form values.
 * @param {Props<TSelectOption, TFieldValues>} props - The component props.
 * @param {string} props.name - The name of the field.
 * @param {SelectProps<TSelectOption>} props.selectOptions - The options for the Select component.
 * @param {RegisterOptions<TFieldValues>} [props.formOptions] - The options for the form field.
 * @return {JSX.Element} The rendered SelectController component.
 */
function SelectController<
  TSelectOption extends SelectOptionAllowTypes,
  TFieldValues extends FieldValues
>({ name, selectOptions, formOptions }: Props<TSelectOption, TFieldValues>) {
  const { control } = useFormContext<TFieldValues>()
  const [selectedOptions, setSelectedOptions] = useState<
    SelectOption<TSelectOption>[]
  >([])

  return (
    <Controller
      control={control}
      name={name}
      rules={formOptions}
      render={({ field }) => {
        useEffect(() => {
          if (Array.isArray(field.value))
            setSelectedOptions(
              field.value.map((v) => findOption(selectOptions.options, v))
            )
          else
            setSelectedOptions([findOption(selectOptions.options, field.value)])
        }, [field.value])

        return (
          <Select<TSelectOption>
            {...field}
            {...selectOptions}
            value={selectedOptions}
            onChange={(options) => {
              if (options) {
                if (isSingleValueSelect<TSelectOption>(options)) {
                  field.onChange(options.value)
                } else {
                  field.onChange(options.map((option) => option.value))
                }
              } else field.onChange([])
            }}
          />
        )
      }}
    />
  )
}

export default SelectController
