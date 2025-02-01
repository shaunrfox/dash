import { headerStyles, titleStyles, themeSwitchStyles } from './headerStyles';
import { css } from '@styled-system/css';

type HeaderProps = {
  theme: string;
  onThemeToggle: () => void;
};

export const Header = ({ theme, onThemeToggle }: HeaderProps) => {
  return (
    <div className={headerStyles}>
      <h1 className={titleStyles}>
        <span className={css({ opacity: 0.4 })}>~/</span>dash
      </h1>
      <button className={themeSwitchStyles} onClick={onThemeToggle}>
        <span></span>
      </button>
    </div>
  );
};
