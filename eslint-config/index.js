/* eslint-disable import/default, import/namespace */
import filename from './filename.js'
import importConfig from './import.js'
import prettier from './prettier.js'
import react from './react.js'
import recommended from './recommended.js'
import tailwind from './tailwind.js'
import typescript from './typescript.js'
/* eslint-enable import/default, import/namespace */

export default [
  ...recommended,
  ...typescript,
  ...filename,
  ...importConfig,
  ...react,
  ...tailwind,
  ...prettier
]
