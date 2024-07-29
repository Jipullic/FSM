import _ from 'lodash'

import { FORM_ERROR_MESSAGES } from '@/constants/formMessages'
import { REGEX } from '@/constants/regex'

import type { FormInputConfig, FormInputType } from './baseForm.types'

const DEFAULTS: Record<FormInputType, Partial<FormInputConfig<any, any>>> = {
  text: {
    type: 'text',
    formOptions: {
      maxLength: {
        value: 63,
        message: FORM_ERROR_MESSAGES.maxLength
      }
    }
  },
  number: {
    formOptions: {
      pattern: {
        value: /^[0-9]*$/,
        message: FORM_ERROR_MESSAGES.pattern
      }
    }
  },
  float: {
    formOptions: {
      pattern: {
        value: /^[0-9]+(\.[0-9]+)?$/,
        message: FORM_ERROR_MESSAGES.pattern
      }
    }
  },
  date: {
    formOptions: {
      pattern: {
        value: REGEX.formattedDateRegex,
        message: FORM_ERROR_MESSAGES.pattern
      }
    }
  },
  select: {}
}

const DEFAULTS_FOR_DEFAULTS: Partial<FormInputConfig<any, any>> = {
  createSettings: {
    status: 'enabled'
  },
  updateSettings: {
    status: 'enabled'
  },
  formOptions: {
    required: true
  }
}

export const DEFAULT_FORM_INPUT_CONFIG = _.mapValues(DEFAULTS, (config) =>
  _.merge({}, DEFAULTS_FOR_DEFAULTS, config)
)
