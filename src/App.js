import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { useTranslation } from './data/translations';
import SettingsIcon from './components/SettingsIcon';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Recommendation = lazy(() => import('./pages/Recommendation'));
const Settings = lazy(() => import('./pages/Settings'));

// Loading component
const Loading = () => {
	const { language } = useLanguage();
	const t = useTranslation(language);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				color: '#607B96'
			}}>
			<h2>{t('loading')}</h2>
		</div>
	);
};

function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<AppProvider>
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route
								exact
								path="/"
								element={<Home />}
							/>
							<Route
								path="/about"
								element={<About />}
							/>
							<Route
								path="/projects"
								element={<Projects />}
							/>
							<Route
								path="/contact"
								element={<Contact />}
							/>
							<Route
								path="/recommendation"
								element={<Recommendation />}
							/>
							<Route
								path="/settings"
								element={<Settings />}
							/>
						</Routes>
						<SettingsIcon />
					</Suspense>
				</AppProvider>
			</LanguageProvider>
		</ThemeProvider>
	);
}

export default App;
