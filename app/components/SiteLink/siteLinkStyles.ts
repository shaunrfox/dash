import { css } from '@styled-system/css';

export const siteItemStyles = css({
  padding: 0,
  height: '100%',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: { base: 'blue.500', _dark: 'pink.500' },
  borderRadius: 6,
  position: 'relative',
  transformOrigin: 'center',
  transition: 'all 0.3s ease',
  _hover: {
    transform: 'scale(1.025)',
  },
});

export const linkStyles = css({
  color: { base: 'blue.500', _dark: 'pink.500' },
  textDecoration: 'none',
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  height: '100%',
});

export const titleStyles = css({
  fontWeight: '600',
  fontSize: 20,
  color: { base: 'stone.900', _dark: 'stone.100' },
});

export const descriptionStyles = css({
  color: { base: 'blue.500', _dark: 'pink.500' },
  fontSize: 14,
});
