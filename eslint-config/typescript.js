import typescriptParser from '@typescript-eslint/parser'
import globals from 'globals'
import typescript from 'typescript-eslint'

const typescriptConfigRecommended = typescript.config(
  ...typescript.configs.strict,
  // ...typescript.configs.recommended,
  ...typescript.configs.stylistic
)

export default [
  ...typescriptConfigRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['node_modules'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    plugins: {},
    rules: {
      '@typescript-eslint/consistent-type-definitions': 0, // отключаем использование только интерфейсов (можно и interface и type)
      '@typescript-eslint/no-unused-vars': 1, // warning для неиспользуемых переменных
      '@typescript-eslint/no-explicit-any': 0, // разрешить тип any
      // '@typescript-eslint/explicit-module-boundary-types': 1, // Требовать явного указания типов
      'no-nested-ternary': 2, // не использовать вложенные тернарные выражения
      'no-empty': 0, // не использовать пустые блоки
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          modifiers: ['const', 'exported'],
          types: ['function'],
          format: ['PascalCase', 'camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow'
        },
        {
          selector: 'variable',
          modifiers: ['const', 'exported'],
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow'
        },
        {
          selector: 'variable',
          modifiers: ['const', 'exported'],
          format: ['PascalCase'],
          filter: {
            regex: '^(?!use).*Context$',
            match: true
          }
        }
        // {
        //   selector: 'interface',
        //   format: ['PascalCase'],
        //   prefix: ['I']
        // }
      ]
    }
  }
]
