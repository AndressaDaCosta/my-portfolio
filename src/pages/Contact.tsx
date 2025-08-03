import React from 'react';
import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import MenuMobile from '../components/MenuMobile';
import LayoutWrapper from '../components/LayoutWrapper';
import '../styles/Contact.css';
import contacts from '../data/contacts';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';

const Contact: React.FC = () => {
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
						<main className="main-wrapper contact">
							<div className="title-container">
								<h1 className="title-contact">
									{t('contactSubtitle')}
								</h1>
								<h2 className="message-contact">
									" Sozinhos vencemos às vezes, mas em equipe
									podemos ganhar constantemente! " – Autor
									desconhecido ·
								</h2>
							</div>
							<div className="list-contact">
								<p className="class-name line">
									.contatos
									<span className="element">{' {'}</span>
								</p>
								{contacts.map(({ social, href, text }) => (
									<p
										className="key-name line"
										key={social}>
										{social}:
										<a
											href={href}
											target="_blank"
											rel="noreferrer">
											{text}
										</a>
										;
									</p>
								))}
								<p className="element line">{'}'}</p>
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

export default Contact;
