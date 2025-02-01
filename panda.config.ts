import { defineConfig } from '@pandacss/dev';
import { tokens } from './app/styles/tokens';
import { globalCss } from './app/styles/globalStyle';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
    },
  },

  globalCss: {
    ...globalCss,
  },
  conditions: {
    light: '[data-theme="light"] &',
    dark: '[data-theme="dark"] &',
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
