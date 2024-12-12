import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api/":{
        target: "https://xyz-nu-six.vercel.app/api/"
        // target: "http://localhost:3003"
      }
    }
  }
})
