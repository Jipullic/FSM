import type { StylesConfig } from 'react-select'

import type { SelectOption } from './select.types'

export const selectStyles: StylesConfig<SelectOption<any>> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#fff' : '#f9fafb', // bg-gray-50 for unfocused
    borderColor: state.isFocused ? '#0e62f0' : '#d1d5db', // border-blue-700 for focused
    boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : 'none', // focus:ring-blue-500
    '&:hover': {
      borderColor: state.isFocused ? '#3b82f6' : '#d1d5db'
    },
    borderRadius: '0.5rem', // rounded-lg
    color: '#111827', // text-gray-900
    fontSize: '0.875rem', // text-sm
    padding: '0.13rem' // for form
  }),
  option: (base, state) => {
    let backgroundColor
    if (state.isSelected) backgroundColor = '#0e62f0'
    else if (state.isFocused) backgroundColor = '#e5e7eb'
    else backgroundColor = 'white'

    return {
      ...base,
      backgroundColor: backgroundColor
      // color: state.isSelected ? 'gray' : 'black',
      // '&:hover': {
      //   backgroundColor: '#e5e7eb' // hover color
      // }
    }
  },
  singleValue: (base) => ({
    ...base,
    color: '#111827' // text color
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '0.5em',
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    // marginTop: '0.5rem'
  }),
  menuList: (base) => ({
    ...base,
    borderRadius: '0.5em',
    padding: '0'
  }),
  placeholder: (base) => ({
    ...base,
    color: '#9ca3af' // dark:placeholder-gray-400
  }),
  input: (base) => ({
    ...base,
    color: '#111827' // dark:text-white for dark mode support
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? '#3b82f6' : '#9ca3af',
    '&:hover': {
      color: '#3b82f6'
    }
  })
}
