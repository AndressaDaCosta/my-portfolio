import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(() => {
		return localStorage.getItem('portfolio-language') || 'pt-BR';
	});

	useEffect(() => {
		localStorage.setItem('portfolio-language', language);
	}, [language]);

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === 'pt-BR' ? 'en' : 'pt-BR'));
	};

	const value = {
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
