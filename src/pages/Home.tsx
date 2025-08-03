import React from 'react';
import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import LayoutWrapper from '../components/LayoutWrapper';
import '../styles/Home.css';
import image from '../images/img-perfil.png';
import { FiDownload } from 'react-icons/fi';
import MenuMobile from '../components/MenuMobile';
import TypeWriter from '../components/TypeWriter';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';

const Home: React.FC = () => {
	const { language } = useLanguage();
	const t = useTranslation(language);

	return (
		<LayoutWrapper>
			<div className="app-container">
				<TitleBar />
				<section className="flex-container">
					<SideBar />
					<section className="main-container">
						<Header />
						<MenuMobile />
						<main className="main-wrapper home">
							<div className="home-content">
								<p>
									<span className="span">{'<'}</span>{' '}
									{t('hello')}
								</p>
								<h1>
									Andressa Da Costa{' '}
									<span className="span">{'/>'}</span>{' '}
								</h1>
								<TypeWriter
									steps={[
										t('welcome'),
										1000,
										t('frontendDeveloper'),
										1000,
										t('webDevelopmentStudent'),
										1000
									]}
									loop={Infinity}
									wrapper="h2"
								/>
								<a
									href="https://drive.google.com/file/d/1yU1RWSXoN7D-S23y3_UQOZlDWYshe8FJ/view?usp=share_link"
									target="_blank"
									className="btn-download"
									rel="noreferrer"
									aria-label={t('downloadCVAria')}>
									{t('downloadCV')}
									<FiDownload />
								</a>
							</div>
							<img
								src={image}
								alt="Foto de perfil avatar de Andressa Costa, uma jovem mulher branca de cabelo castanho"
								className="image-perfil"
							/>
						</main>
					</section>
					{/* <SideBar /> */}
				</section>
				<Footer />
			</div>
		</LayoutWrapper>
	);
};

export default Home;
