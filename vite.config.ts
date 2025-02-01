import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/components', 'src/hooks', 'src/utils'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.json',
    }),
  ],
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, './src') },
      {
        find: '@styled-system',
        replacement: path.resolve(__dirname, './styled-system'),
      },
    ],
  },
  root: '.',
  publicDir: 'public',
  build: {
    ssr: false,
    outDir: 'dist',
  },
});
