import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-todo/',
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Vite Todo App',
      short_name: 'PWA',
      description: 'Vite Todo App',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    }
  })
  ],
})
