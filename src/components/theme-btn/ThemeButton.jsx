import React , { useState, useEffect } from 'react';
import { LuSun, LuMoon } from 'react-icons/lu'; // Importing Sun and Moon icons from Lucide

const ThemeButton = ({ toggleTheme }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    return (
        <button 
            onClick={() => {
                toggleTheme();
                setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
            }} 
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} 
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '0',
                color: 'var(--text-color)',
                fontSize: '24px',
            }}
        >
            {theme === 'light' ? <LuMoon /> : <LuSun />}
        </button>
    );
};

export default ThemeButton;