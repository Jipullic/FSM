import React from 'react'
import {
  FormProvider,
  useForm,
  type FieldValues,
  type UseFormProps
} from 'react-hook-form'

interface Props<T extends FieldValues> {
  formProps?: UseFormProps<T>
  children: React.ReactNode
}

export function HookFormProvider<T extends FieldValues>({
  formProps,
  children
}: Props<T>) {
  const methods = useForm<T>(formProps)

  return <FormProvider {...methods}>{children}</FormProvider>
}
