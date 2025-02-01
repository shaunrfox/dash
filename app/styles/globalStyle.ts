import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  '*': {
    transition: 'all 0.3s ease',
  },
  html: {
    fontFamily:
      '"Fira Code Variable", "JetBrains Mono", "Cascadia Code", "Source Code Pro", "Consolas", monospace',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 'calc(1em + 0.5rem)',
  },
  body: {
    margin: 0,
    padding: 20,
    bg: { base: 'stone.50', _dark: 'stone.950' },
    color: { base: 'stone.600', _dark: 'stone.200' },
  },
  'h1, h2, h3, h4, h5, h6': {
    color: { base: 'stone.900', _dark: 'stone.50' },
    fontWeight: 'bold',
    lineHeight: 'calc(1em + 0.5rem)',
  },
  p: {
    marginBottom: 8,
  },
  '.container': {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 24,
  },
});
