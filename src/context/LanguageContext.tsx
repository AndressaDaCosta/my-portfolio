import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageContextType } from '../types';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [language, setLanguage] = useState<'pt-BR' | 'en'>(() => {
		return (localStorage.getItem('portfolio-language') as 'pt-BR' | 'en') || 'pt-BR';
	});

	useEffect(() => {
		localStorage.setItem('portfolio-language', language);
	}, [language]);

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === 'pt-BR' ? 'en' : 'pt-BR'));
	};

	const value: LanguageContextType = {
		language,
		setLanguage,
		toggleLanguage,
		isEnglish: language === 'en',
		isPortuguese: language === 'pt-BR'
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};