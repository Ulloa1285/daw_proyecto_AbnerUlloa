import React, { createContext, useState, useContext, ReactNode } from 'react';

// Tipos permitidos
export type ThemeType = 'light' | 'dark';
export type FontSize = 'small' | 'medium' | 'large';
export type ImageSize = 'small' | 'medium' | 'large';

// Configuración de estilos base según las preferencias
const themeStyles = {
  light: {
    background: '#ffffff',
    surface: '#f1f5f9',
    surfaceSecondary: '#e5e7eb',
    text: '#0f172a',
    textSecondary: '#6b7280',
    primary: '#3b82f6',
    border: '#cbd5e1',
  },
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    surfaceSecondary: '#334155',
    text: '#f8fafc',
    textSecondary: '#94a3b8',
    primary: '#60a5fa',
    border: '#475569',
  },
};

const fontSizes = {
  small: { base: 14, title: 20, value: 24, header: 16 },
  medium: { base: 16, title: 24, value: 32, header: 18 },
  large: { base: 20, title: 30, value: 40, header: 22 },
};

const imageSizes = {
  small: { width: 40, height: 40, borderRadius: 8 },
  medium: { width: 60, height: 60, borderRadius: 10 },
  large: { width: 90, height: 90, borderRadius: 12 },
};

interface ThemeContextData {
  theme: ThemeType;
  fontSize: FontSize;
  imageSize: ImageSize;
  setTheme: (theme: ThemeType) => void;
  setFontSize: (size: FontSize) => void;
  setImageSize: (size: ImageSize) => void;
  colors: typeof themeStyles.light;
  fonts: typeof fontSizes.medium;
  images: typeof imageSizes.medium;
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [imageSize, setImageSize] = useState<ImageSize>('medium');

  const value = {
    theme,
    fontSize,
    imageSize,
    setTheme,
    setFontSize,
    setImageSize,
    colors: themeStyles[theme],
    fonts: fontSizes[fontSize],
    images: imageSizes[imageSize],
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
