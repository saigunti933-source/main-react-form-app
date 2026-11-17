
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  preview: {
    allowedHosts: ['main-react-form-app.onrender.com'],
  },
});
