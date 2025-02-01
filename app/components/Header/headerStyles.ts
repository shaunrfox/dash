import { css } from '@styled-system/css';

export const headerStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 48,
  borderBottomWidth: 2,
  borderBottomColor: { base: 'blue.500', _dark: 'pink.500' },
  paddingBottom: 16,
});

export const titleStyles = css({
  color: { base: 'blue.500', _dark: 'pink.500' },
  fontSize: 40,
  margin: 0,
});

export const themeSwitchStyles = css({
  position: 'relative',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: { base: 'blue.500', _dark: 'pink.500' },
  color: 'transparent',
  margin: 8,
  borderRadius: 'full',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 0,
  display: 'grid',
  lineHeight: 'none',
  width: 14,
  height: 14,
  transition: 'all 0.3s ease',
  '&:before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    opacity: 0,
    display: 'block',
    borderRadius: 'full',
    backgroundColor: { base: 'stone.950', _dark: 'stone.50' },
    transition: 'inset 0.3s ease',
  },
  _hover: {
    cursor: 'pointer',
    bg: { base: 'stone.800', _dark: 'stone.50' },
    borderColor: { base: 'stone.950', _dark: 'stone.50' },
    '&:before': {
      inset: -8,
      opacity: 0.25,
    },
  },
});
