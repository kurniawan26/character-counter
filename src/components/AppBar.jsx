import React, { useState } from 'react';

function AppBar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <div className="flex justify-between items-center">
      {darkMode ? (
        <img src="/assets/images/logo-dark-theme.svg" alt="logo" />
      ) : (
        <img src="/assets/images/logo-light-theme.svg" alt="logo" />
      )}

      <button
        onClick={handleDarkModeToggle}
        className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-purple-500"
      >
        <img
          src={
            darkMode
              ? '/assets/images/icon-sun.svg'
              : '/assets/images/icon-moon.svg'
          }
          alt="toggle dark mode"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}

export default AppBar;
