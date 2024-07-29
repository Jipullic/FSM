import { REGEX } from '@/constants/regex'

export const isFormattedDate = (dateString: string): boolean => {
  return REGEX.formattedDateRegex.test(dateString)
}

export const isValidISODate = (dateString: string): boolean => {
  return REGEX.iso8601Regex.test(dateString)
}

export const getFormattedDate = (
  date: Date,
  withHourAndMinutes = true
): string => {
  if (!(date instanceof Date)) return ''

  const Year = date.getFullYear()
  const Month = String(date.getMonth() + 1).padStart(2, '0')
  const Day = String(date.getDate()).padStart(2, '0')

  let formattedDate = `${Day}.${Month}.${Year}`
  if (withHourAndMinutes) {
    const Hours = String(date.getHours()).padStart(2, '0')
    const Minutes = String(date.getMinutes()).padStart(2, '0')
    formattedDate += ` ${Hours}:${Minutes}`
  }

  return formattedDate
}

export const parseFormattedDate = (dateString: string): Date => {
  const [datePart, timePart] = dateString.split(' ')
  const [day, month, year] = datePart.split('.').map(Number)

  let hours = 0
  let minutes = 0
  if (timePart) {
    ;[hours, minutes] = timePart.split(':').map(Number)
  }

  return new Date(year, month - 1, day, hours, minutes)
}

export const convertStringToDatesInObject = (obj: any): any => {
  if (typeof obj === 'string' && isValidISODate(obj)) {
    return new Date(obj)
  } else if (typeof obj === 'string' && isFormattedDate(obj)) {
    return parseFormattedDate(obj)
  } else if (Array.isArray(obj)) {
    return obj.map(convertStringToDatesInObject)
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: any = {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = convertStringToDatesInObject(obj[key])
      }
    }
    return newObj
  }
  return obj
}

export const convertDatesToStringInObject = (obj: any): any => {
  if (obj instanceof Date && getFormattedDate(obj) !== '0') {
    return getFormattedDate(obj)
  } else if (Array.isArray(obj)) {
    return obj.map(convertDatesToStringInObject)
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: any = {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = convertDatesToStringInObject(obj[key])
      }
    }
    return newObj
  }
  return obj
}
