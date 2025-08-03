import React from 'react';
import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import MenuMobile from '../components/MenuMobile';
import LayoutWrapper from '../components/LayoutWrapper';
import ThemeCard from '../components/ThemeCard';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';
import '../styles/Settings.css';

const Settings: React.FC = () => {
	const { themes } = useTheme();
	const { language } = useLanguage();
	const t = useTranslation(language);

	return (
		<LayoutWrapper>
			<body>
				<TitleBar />
				<section className="flex-container">
					<section className="main-container">
						<Header />
						<MenuMobile />
						<main className="main-wrapper settings">
							<div className="settings-container">
								<h1 className="settings-title">
									{t('settingsTitle')}
								</h1>
								<div className="themes-grid">
									{Object.entries(themes).map(([themeKey, themeData]) => (
										<ThemeCard
											key={themeKey}
											theme={themeKey}
											icon={themeData.icon}
											name={themeData.name}
											publisher={themeData.publisher}
										/>
									))}
								</div>
							</div>
						</main>
					</section>
					<SideBar />
				</section>
				<Footer />
			</body>
		</LayoutWrapper>
	);
};

export default Settings;