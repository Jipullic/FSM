import type { FieldError } from 'react-hook-form'

export function isFieldError(error: any): error is FieldError {
  return error && typeof error.message === 'string'
}
