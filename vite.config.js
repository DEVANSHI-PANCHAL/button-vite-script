import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/Button.js',
      name: 'ButtonPlugin',
      fileName: (format) => `button-plugin.${format}.js`
    }
  }
});
