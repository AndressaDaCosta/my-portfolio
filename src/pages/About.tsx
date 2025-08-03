import React from 'react';
import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import MenuMobile from '../components/MenuMobile';
import LayoutWrapper from '../components/LayoutWrapper';
import '../styles/About.css';
import IconCloud from '../components/IconCloud';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';
import { VscRocket } from 'react-icons/vsc';

const About: React.FC = () => {
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
						<main className="main-wrapper about">
							<div className="about-container">
								<span className="span-tag html">
									{'<html>'}
								</span>
								<br />
								<span className="span-tag body">
									{'<body>'}
								</span>
								<br />
								<span className="span-tag content">
									{'<h1>'}
								</span>
								<h1 className="title-about">
									{t('aboutGreeting')}
								</h1>
								<span className="span-tag content">
									{'</h1>'}
								</span>
								<br />
								<span className="span-tag content">
									{'<p>'}
								</span>
								<p className="text-about">
									<VscRocket className="icon-footer" />

									{language === 'pt-BR' ? (
										<>
											Meu nome é{' '}
											<span className="span-highlight">
												Andressa da Costa
											</span>{' '}
											e eu amo resolver problemas através
											do código.
										</>
									) : (
										<>
											My name is{' '}
											<span className="span-highlight">
												Andressa da Costa
											</span>{' '}
											and I love solving problems through
											code.
										</>
									)}
								</p>

								<p className="text-about">
									{language === 'pt-BR' ? (
										<>
											Sou{' '}
											<span className="span-highlight">
												Desenvolvedora Full Stack
											</span>{' '}
											com foco em{' '}
											<span className="span-highlight">
												Fintech e Soluções de Pagamento
											</span>
											, apaixonada por criar aplicações{' '}
											<span className="span-highlight">
												acessíveis, escaláveis
											</span>{' '}
											e que realmente fazem a diferença.
										</>
									) : (
										<>
											I'm a{' '}
											<span className="span-highlight">
												Full Stack Developer
											</span>{' '}
											with a strong focus on{' '}
											<span className="span-highlight">
												Fintech and Payment Solutions
											</span>
											, passionate about creating
											applications that are{' '}
											<span className="span-highlight">
												accessible, scalable
											</span>{' '}
											and truly make a difference.
										</>
									)}
								</p>

								<p className="text-about">
									{language === 'pt-BR' ? (
										<>
											Atuei em projetos reais com
											terminais{' '}
											<span className="span-highlight">
												POS Android
											</span>{' '}
											(Kotlin, Jetpack Compose),{' '}
											<span className="span-highlight">
												apps bancários whitelabel
											</span>{' '}
											(React Native), e{' '}
											<span className="span-highlight">
												plataformas SaaS
											</span>{' '}
											(Next.js, Node.js, AWS Lambda).
											Tenho experiência prática com{' '}
											<span className="span-highlight">
												EMV, PSPs
											</span>{' '}
											e soluções compatíveis com{' '}
											<span className="span-highlight">
												PCI
											</span>
											.
										</>
									) : (
										<>
											I've worked on real-world projects
											involving{' '}
											<span className="span-highlight">
												Android POS terminals
											</span>{' '}
											(with Kotlin and Jetpack Compose),{' '}
											<span className="span-highlight">
												whitelabel banking apps
											</span>{' '}
											(React Native), and{' '}
											<span className="span-highlight">
												SaaS platforms
											</span>{' '}
											(Next.js, Node.js, AWS Lambda). My
											journey includes hands-on experience
											with{' '}
											<span className="span-highlight">
												EMV, PSPs
											</span>
											, and{' '}
											<span className="span-highlight">
												PCI-compliant
											</span>{' '}
											systems.
										</>
									)}
								</p>

								<p className="text-about">
									<BsChatDots className="icon-footer" />{' '}
									{t('aboutAskMe')}:{' '}
									<span className="span-highlight">
										{t('aboutTechList')}
									</span>
								</p>

								<p className="text-about last">
									<AiOutlineThunderbolt className="icon-footer" />{' '}
									{t('aboutFunFact')}:{' '}
									<span className="span-highlight">
										{t('aboutFunFactText')}
									</span>
								</p>
								<span className="span-tag content">
									{'</p>'}
								</span>
								<br />
								<span className="span-tag body">
									{'</body>'}
								</span>
								<br />
								<span className="span-tag html">
									{'</html>'}
								</span>
							</div>
							<IconCloud />
						</main>
					</section>
					<SideBar />
				</section>
				<Footer />
			</body>
		</LayoutWrapper>
	);
};

export default About;
