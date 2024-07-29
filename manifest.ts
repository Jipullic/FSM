import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa'
// import fs from 'fs'

const manifest: Partial<ManifestOptions> = {
  name: 'Vite PWA Project',
  short_name: 'Vite PWA Project',
  description: 'desk',
  display: 'standalone',
  start_url: '/',
  theme_color: '#ffffff',
  background_color: '#ffffff',
  icons: [
    {
      src: 'pwa-64x64.png',
      sizes: '64x64',
      type: 'image/png'
    },
    {
      src: 'pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: 'maskable-icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable'
    }
  ]
}
// fs.writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 2))

const PWA_OPTIONS: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
  manifest: manifest
}

export default PWA_OPTIONS
