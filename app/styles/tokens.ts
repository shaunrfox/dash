import type { Tokens } from '@pandacss/types';
import { aspectRatios } from './aspect-ratios';
import { borders } from './borders';
import { colors } from './colors';
import { animations } from './keyframes';
import { shadows } from './shadows';
// import { sizes } from './sizes';
// import { spacing } from './spacing';
import {
  fonts,
  // fontSizes,
  // fontWeights,
  letterSpacings,
  lineHeights,
} from './typography';

const fontWeights = {
  light: { value: 300 },
  normal: { value: 400 },
  medium: { value: 500 },
  bold: { value: 700 },
};

const sizes = {
  0: { value: '0' },
  1: { value: '0.0625rem' },
  2: { value: '0.125rem' },
  3: { value: '0.1875rem' },
  4: { value: '0.25rem' },
  5: { value: '0.3125rem' },
  6: { value: '0.375rem' },
  7: { value: '0.4375rem' },
  8: { value: '0.5rem' },
  10: { value: '0.625rem' },
  12: { value: '0.75rem' },
  14: { value: '0.875rem' },
  16: { value: '1rem' },
  20: { value: '1.25rem' },
  24: { value: '1.5rem' },
  32: { value: '2rem' },
  40: { value: '2.5rem' },
  48: { value: '3rem' },
  56: { value: '3.5rem' },
  64: { value: '4rem' },
  72: { value: '4.5rem' },
  80: { value: '5rem' },
  96: { value: '6rem' },
  full: { value: '100%' },
  min: { value: 'min-content' },
  max: { value: 'max-content' },
  fit: { value: 'fit-content' },
  xs: { value: '20rem' }, // 320px
  sm: { value: '24rem' }, // 384px
  md: { value: '28rem' }, // 448px
  lg: { value: '32rem' }, // 512px
  xl: { value: '36rem' }, // 576px
  '2xl': { value: '42rem' }, // 672px
  '3xl': { value: '48rem' }, // 768px
  '4xl': { value: '56rem' }, // 896px
  '5xl': { value: '64rem' }, // 1024px
  '6xl': { value: '72rem' }, // 1152px
  '7xl': { value: '80rem' }, // 1280px
  '8xl': { value: '90rem' }, // 1440px
  prose: { value: '65ch' }, // 1040px
};

const fontSizes = {
  12: { value: '0.75rem' },
  14: { value: '0.875rem' },
  16: { value: '1rem' },
  20: { value: '1.25rem' },
  24: { value: '1.5rem' },
  32: { value: '2rem' },
  40: { value: '2.5rem' },
  48: { value: '3rem' },
  64: { value: '4rem' },
  72: { value: '4.5rem' },
  80: { value: '5rem' },
  96: { value: '6rem' },
};

const defineTokens = <T extends Tokens>(v: T) => v;

export const tokens = defineTokens({
  aspectRatios,
  borders,
  easings: {
    default: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    linear: { value: 'linear' },
    in: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
    out: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
    'in-out': { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  },
  durations: {
    fastest: { value: '50ms' },
    faster: { value: '100ms' },
    fast: { value: '150ms' },
    normal: { value: '200ms' },
    slow: { value: '300ms' },
    slower: { value: '400ms' },
    slowest: { value: '500ms' },
  },
  radii: {
    xs: { value: '0.125rem' },
    sm: { value: '0.25rem' },
    md: { value: '0.375rem' },
    lg: { value: '0.5rem' },
    xl: { value: '0.75rem' },
    '2xl': { value: '1rem' },
    '3xl': { value: '1.5rem' },
    '4xl': { value: '2rem' },
    full: { value: '9999px' },
  },
  fontWeights,
  lineHeights,
  fonts,
  letterSpacings,
  fontSizes,
  shadows,
  colors,
  blurs: {
    sm: { value: '4px' },
    base: { value: '8px' },
    md: { value: '12px' },
    lg: { value: '16px' },
    xl: { value: '24px' },
    '2xl': { value: '40px' },
    '3xl': { value: '64px' },
  },
  spacing: sizes,
  sizes,
  animations,
});
