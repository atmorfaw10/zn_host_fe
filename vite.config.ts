import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'host',
      remotes: {
        // We will file these in as we build each remote app
        // homeApp: 'http://localhost:5001/assets/remoteEntry.js
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    })
  ],
  build: {
    target: 'esnext',
  }
})
