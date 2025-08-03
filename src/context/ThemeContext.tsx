import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextType, Theme } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

const themes: Record<string, Theme> = {
	'vscode-dark': {
		name: 'VS Code Dark',
		icon: '/themes/vs-code.webp',
		publisher: 'Microsoft'
	},
	'github-dark': {
		name: 'GitHub Dark',
		icon: '/themes/github-dark.webp',
		publisher: 'GitHub'
	},
	'dracula': {
		name: 'Dracula',
		icon: '/themes/dracula.webp',
		publisher: 'Dracula Theme'
	},
	'ayu-dark': {
		name: 'Ayu Dark',
		icon: '/themes/ayu.webp',
		publisher: 'teabyii'
	},
	'ayu-mirage': {
		name: 'Ayu Mirage',
		icon: '/themes/ayu.webp',
		publisher: 'teabyii'
	},
	'nord': {
		name: 'Nord',
		icon: '/themes/nord.webp',
		publisher: 'arcticicestudio'
	},
	'night-owl': {
		name: 'Night Owl',
		icon: '/themes/night-owl.webp',
		publisher: 'sarah.drasner'
	}
};

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [currentTheme, setCurrentTheme] = useState<string>(() => {
		return localStorage.getItem('portfolio-theme') || 'vscode-dark';
	});

	useEffect(() => {
		localStorage.setItem('portfolio-theme', currentTheme);
		document.documentElement.setAttribute('data-theme', currentTheme);
	}, [currentTheme]);

	const setTheme = (theme: string) => {
		setCurrentTheme(theme);
	};

	const value: ThemeContextType = {
		currentTheme,
		setTheme,
		themes,
		getCurrentThemeInfo: () => themes[currentTheme]
	};

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};