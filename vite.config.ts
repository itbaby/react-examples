import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import preloadPlugin from 'vite-preload/plugin';
// https://vite.dev/config/
export default defineConfig({
  plugins: [preloadPlugin(), react()],
})
