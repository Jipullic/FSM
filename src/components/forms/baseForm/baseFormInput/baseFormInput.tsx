import clsx from 'clsx'
import { useFormContext, type FieldValues, type Path } from 'react-hook-form'

import LabelContainer from '@/components/containers/labelContainer/labelContainer'
import Input, { type InputStyle } from '@/components/elements/input/input'
import SelectController from '@/components/forms/controllers/selectController'
import { FormatNames } from '@/constants/formMessages'
import { formatString } from '@/utils/formatString'

import { isFieldError } from './baseFormInput.types'
import type { FormInputConfig, FormType } from '../baseForm/baseForm.types'
import DateController from '../../controllers/dateController'

interface Props<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>
  config: FormInputConfig<TFieldValues>
  formType: FormType
}

function BaseFormInput<TFieldValues extends FieldValues>({
  name,
  config,
  formType
}: Props<TFieldValues>) {
  const {
    register,
    formState: { errors }
  } = useFormContext<TFieldValues>()

  const labelContainerStyle = clsx(
    config.gridColumn && config.gridColumn === 2 && 'md:col-span-2'
  )
  const error = errors[name]
  const inputStyle: InputStyle = error ? 'form-error' : 'form'

  const settingsByAction =
    formType === 'create' ? config.createSettings : config.updateSettings

  if (settingsByAction.status === 'hide') return <></>

  const disabled = settingsByAction.status === 'disabled'

  if (config.type === 'select' && config.selectOptions !== undefined) {
    return (
      <LabelContainer label={config.label} className={labelContainerStyle}>
        <SelectController
          name={name}
          formOptions={config.formOptions}
          selectOptions={{
            ...config.selectOptions,
            isDisabled: disabled
          }}
        />
      </LabelContainer>
    )
  }

  let error_message
  if (error && isFieldError(error)) {
    if (error.type === 'maxLength') {
      const maxLength = (config.formOptions?.maxLength as { value: number })
        ?.value
      error_message = formatString(error.message, {
        [FormatNames.length]: maxLength.toString()
      })
    } else error_message = error.message
  }

  const errorComponent = error_message && (
    <div className='text-red-400'>{error_message}</div>
  )

  return (
    <LabelContainer label={config.label} className={labelContainerStyle}>
      <Input
        inputStyle={inputStyle}
        disabled={disabled}
        placeholder={config.placeholder}
        formRegister={register(name, config.formOptions)}
      />
      {errorComponent}
    </LabelContainer>
  )
}

export default BaseFormInput
