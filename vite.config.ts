import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

import manifest from './manifest'

export default defineConfig(({ mode }) => {
  // нужно только для загрузки API_URL (так как EnvironmentPlugin срабатывает после инициализации конфига)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      EnvironmentPlugin(['API_URL']),
      VitePWA(manifest),
      tsconfigPaths()
    ],
    server: {
      port: 3000,
      proxy: {
        '/api': env.API_URL
      }
    }
  }
})
