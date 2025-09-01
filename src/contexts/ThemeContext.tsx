'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeContextType } from '@/types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Update document class and favicon based on theme
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      // Update favicon for dark mode
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        favicon.href = '/nashdarklogo.svg';
      }
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      // Update favicon for light mode
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        favicon.href = '/nashlightlogo.svg';
      }
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
    
    // Log theme change (matching original website behavior)
    console.log(`Dark mode active? ${theme === 'dark'}`);
    console.log(`Setting favicon to /${theme === 'dark' ? 'nashdarklogo' : 'nashlightlogo'}.svg`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};