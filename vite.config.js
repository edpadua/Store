import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "../node_modules/react-redux/dist/react-redux", 
        "../node_modules/@reduxjs/toolkit", 
        "../node_modules/react-uuid",
        "../node_modules/react-multi-carousel",
        "../node_modules/react-multi-carousel/lib/styles.css"
      ],
    },
  },
}
)
