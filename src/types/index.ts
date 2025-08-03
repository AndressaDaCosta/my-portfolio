// Project types
export interface Project {
  type: 'front' | 'back' | 'full' | 'mobile';
  name: string;
  description: string;
  src: string;
  repository?: string;
  site?: string;
  technologies: string[];
}

// Contact types
export interface Contact {
  social: string;
  href: string;
  text: string;
}

// Recommendation types
export interface Recommendation {
  name: string;
  message: string;
  social: string;
}

// Theme types
export interface Theme {
  name: string;
  icon: string;
  publisher: string;
}

export interface ThemeContextType {
  currentTheme: string;
  setTheme: (theme: string) => void;
  themes: Record<string, Theme>;
  getCurrentThemeInfo: () => Theme;
}

// Language types
export interface LanguageContextType {
  language: 'pt-BR' | 'en';
  setLanguage: (language: 'pt-BR' | 'en') => void;
  toggleLanguage: () => void;
  isEnglish: boolean;
  isPortuguese: boolean;
}

// Translation types
export type TranslationKey = keyof typeof import('../data/translations').translations['pt-BR'];
export type TranslationFunction = (key: TranslationKey) => string;