function toggleTheme() {
  const html = document.documentElement;
  const themeIcon = document.querySelector('.theme-icon');
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    html.removeAttribute('data-theme');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.querySelector('.theme-icon').textContent = '☀️';
}

// Check system preference on first visit
if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.querySelector('.theme-icon').textContent = '☀️';
}
