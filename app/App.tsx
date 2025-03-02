import { useEffect, useState } from 'react';
import links from '../links.json';
import type { Site } from './types';
import { Header } from './components/Header';
import { SiteLink } from './components/SiteLink/SiteLink';
import { css } from '@styled-system/css';

const sitesListStyles = css({
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '1.5rem',
  '@media (maxWidth: 600px)': {
    gap: '1rem',
  },
});

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="container">
      <Header onThemeToggle={toggleTheme} />
      <main>
        <ul className={sitesListStyles}>
          {links.map((site: Site) => (
            <SiteLink site={site} key={site.url} />
          ))}
        </ul>
      </main>
    </div>
  );
}
