import react from 'eslint-plugin-react'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules'],
    languageOptions: {
      ...reactRecommended.languageOptions
    },
    plugins: {
      react,
      reactHooks
    },
    rules: {
      ...reactRecommended.rules,
      'react/react-in-jsx-scope': 0
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
