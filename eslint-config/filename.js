import checkFile from 'eslint-plugin-check-file'
// https://github.com/DukeLuo/eslint-plugin-check-file

export default [
  {
    plugins: {
      'check-file': checkFile
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        { 'src/**/!(vite-env.d.ts).{js,jsx,ts,tsx}': 'CAMEL_CASE' },
        { ignoreMiddleExtensions: true }
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/': 'CAMEL_CASE'
        }
      ]
    }
  }
]
