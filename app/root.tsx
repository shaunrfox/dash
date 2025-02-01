import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import '../index.css';
import { Header } from './components/Header';

export default function Root() {
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
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <Outlet />
    </div>
  );
}
