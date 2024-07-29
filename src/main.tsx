import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/styles/tailwind/tailwind.sass'
import '@/styles/global.sass'
import App from '@/app'

const isDev = import.meta.env.DEV

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  isDev ? (
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  ) : (
    <App></App>
  )
)
