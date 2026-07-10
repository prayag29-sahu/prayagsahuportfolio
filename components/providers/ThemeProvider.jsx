'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        /* 
           Theme Initialization 
           I check localStorage first to see if the user has a preferred theme.
           If not, I force 'dark' as the default to match the brand aesthetic.
        */
        const stored = localStorage.getItem('portfolio-theme');
        if (stored === 'light' || stored === 'dark') {
            setTheme(stored);
            applyTheme(stored);
        } else {
            const initial = 'light';
            setTheme(initial);
            applyTheme(initial);
        }
        // Prevents hydration mismatch by ensuring the theme is applied before mounting
        setMounted(true);
    }, []);

    function applyTheme(t) {
        const html = document.documentElement;
        if (t === 'light') {
            html.classList.add('light');
            html.classList.remove('dark');
        } else {
            html.classList.remove('light');
            html.classList.add('dark');
        }
    }

    function toggleTheme() {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        applyTheme(next);
        localStorage.setItem('portfolio-theme', next);
    }

    // Prevent flash on first render
    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
