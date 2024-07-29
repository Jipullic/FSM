export enum FormatNames {
  length
}

export const FORM_ERROR_MESSAGES = {
  required: 'Обязательное поле',
  maxLength: `Максимальная длина \${${FormatNames.length}} символа`,
  pattern: 'Неверный формат'
}
