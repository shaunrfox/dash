export const keyframes = {
  spin: {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  ping: {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
  pulse: {
    '50%': {
      opacity: '.5',
    },
  },
  bounce: {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
    },
    '50%': {
      transform: 'none',
      animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
    },
  },
  pulseGlowPink: {
    from: {
      boxShadow: `
        0 0 4px var(--colors-pink-500),
        0 0 8px var(--colors-pink-500),
        0 0 16px var(--colors-pink-500)
        `,
    },
    to: {
      boxShadow: `
        0 0 8px var(--colors-pink-500),
        0 0 16px var(--colors-pink-500),
        0 0 32px var(--colors-pink-500)
        `,
    },
  },
  pulseGlowBlue: {
    from: {
      boxShadow: `
        0 0 4px var(--colors-blue-500),
        0 0 8px var(--colors-blue-500),
        0 0 16px var(--colors-blue-500)
        `,
    },
    to: {
      boxShadow: `
        0 0 8px var(--colors-blue-500),
        0 0 16px var(--colors-blue-500),
        0 0 32px var(--colors-blue-500)
        `,
    },
  },
};

export const animations = {
  spin: { value: 'spin 1s linear infinite' },
  ping: { value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' },
  pulse: { value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
  bounce: { value: 'bounce 1s infinite' },
};
