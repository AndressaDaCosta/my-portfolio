import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { useTranslation } from './data/translations';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Recommendation = lazy(() => import('./pages/Recommendation'));

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
					</Routes>
				</Suspense>
			</AppProvider>
		</LanguageProvider>
	);
}

export default App;
