import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    plugins: {
      import: importPlugin
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      'import/no-unresolved': ['error'],
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': ['error', { allowComputed: true }],
      'import/no-restricted-paths': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-internal-modules': 'off',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-relative-parent-imports': 'off',
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index']
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // this is optional, but it will include `@types` directory for type resolution
          project: './tsconfig.json'
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  }
]
