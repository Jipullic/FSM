import _ from 'lodash'
import { useMemo } from 'react'
import { type FieldValues, type Path } from 'react-hook-form'

import { DEFAULT_FORM_INPUT_CONFIG } from './baseform.defaults'
import {
  type FormInputsConfig,
  type FormInputConfig,
  type FormType
} from './baseForm.types'
import BaseFormInput from '../baseFormInput/baseFormInput'

interface Props<TFieldValues extends FieldValues> {
  formInputs: FormInputsConfig<TFieldValues>
  formType: FormType
}

function BaseForm<TFieldValues extends FieldValues>({
  formInputs,
  formType
}: Props<TFieldValues>) {
  type InputConfigType = FormInputConfig<TFieldValues>
  type KeyType = Path<TFieldValues>

  const defaultFormInputs = useMemo(() => {
    const result = _.cloneDeep(formInputs)
    Object.entries(result).map(([key, configUnknown]) => {
      const config = configUnknown as InputConfigType

      const newConfig = _.merge(
        {},
        DEFAULT_FORM_INPUT_CONFIG[config.type || 'text'] as InputConfigType,
        config
      )

      result[key as KeyType] = newConfig
    })

    return result
  }, [formInputs])

  return (
    <>
      {Object.entries(defaultFormInputs).map(([keyString, configUnknown]) => {
        const key = keyString as KeyType
        const config = configUnknown as InputConfigType
        return (
          <BaseFormInput
            key={key}
            name={key}
            config={config}
            formType={formType}
          />
        )
      })}
    </>
  )
}

export default BaseForm
