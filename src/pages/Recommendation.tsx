import React from 'react';
import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import MenuMobile from '../components/MenuMobile';
import LayoutWrapper from '../components/LayoutWrapper';
import recommendation from '../data/recommendation';
import '../styles/Recommendation.css';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';

const Recommendation: React.FC = () => {
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
						<main className="main-wrapper recommendation">
							<h1 className="title-recommendation">
								{t('recommendationsSubtitle')}
							</h1>
							<div className="recommendation-container">
								{recommendation.map(
									({ name, message, social }, index) => (
										<div
											className={`recommendation-card ${
												index === 1 && 'border'
											}`}
											key={name}>
											<p>{message}</p>
											<a
												href={social}
												target="_blank"
												rel="noreferrer"
												className="social-link">
												<h2>{name}</h2>
											</a>
										</div>
									)
								)}
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

export default Recommendation;
