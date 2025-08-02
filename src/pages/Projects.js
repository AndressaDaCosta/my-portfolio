import React, { useState, useMemo } from 'react';
import ImageWithLoading from '../components/ImageWithLoading';
import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import MenuMobile from '../components/MenuMobile';
import LayoutWrapper from '../components/LayoutWrapper';
import projects from '../data/projects';
import '../styles/Projects.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';

function Projects() {
	const { language } = useLanguage();
	const t = useTranslation(language);
	const [typeFilter, setTypeFilter] = useState('all');
	const filteredProjects = useMemo(() => {
		if (typeFilter === 'all') return projects;
		return projects.filter(({ type }) => type.includes(typeFilter));
	}, [typeFilter]);
	return (
		<LayoutWrapper>
			<div className="app-container">
				<TitleBar />
				<section className="flex-container">
					<section className="main-container">
						<Header />
						<MenuMobile />
						<main className="main-wrapper projects">
							<h1 className="title-page-projects">
								{t('projectsTitle')}
							</h1>
							<div className="btn-container">
								<button
									type="button"
									className={`btn-filter ${
										typeFilter === 'all' && 'active'
									}`}
									onClick={() => setTypeFilter('all')}>
									{t('all')}
								</button>
								<button
									type="button"
									className={`btn-filter ${
										typeFilter === 'front' && 'active'
									}`}
									onClick={() => setTypeFilter('front')}>
									{t('frontend')}
								</button>
								<button
									type="button"
									className={`btn-filter ${
										typeFilter === 'back' && 'active'
									}`}
									onClick={() => setTypeFilter('back')}>
									{t('backend')}
								</button>
								<button
									type="button"
									className={`btn-filter ${
										typeFilter === 'full' && 'active'
									}`}
									onClick={() => setTypeFilter('full')}>
									{t('fullstack')}
								</button>
								<button
									type="button"
									className={`btn-filter ${
										typeFilter === 'mobile' && 'active'
									}`}
									onClick={() => setTypeFilter('mobile')}>
									{t('mobile')}
								</button>
							</div>
							<div className="projects-container">
								{filteredProjects.map(
									(
										{
											type,
											name,
											src,
											repository,
											description,
											site,
											technologies
										},
										index
									) => (
										<div
											key={`${type}-${name}-${index}`}
											className="card-project">
											<ImageWithLoading
												src={src}
												alt={`${t(
													'screenshotProject'
												)} ${name}`}
												className="img-project"
											/>
											<h2 className="title-project">
												{name}
											</h2>
											<p>{description}</p>
											<div className="technologies-container">
												{technologies.map(
													(tech, techIndex) => (
														<span
															key={`${tech}-${techIndex}`}
															className="span-technologies">
															{tech}
														</span>
													)
												)}
											</div>
											<div className="links-container">
												<a
													href={repository}
													title={t('github')}
													target="_blank"
													rel="noreferrer">
													<FiGithub />
												</a>
												<a
													href={site}
													title={t('viewApp')}
													target="_blank"
													rel="noreferrer">
													<FiExternalLink />
												</a>
											</div>
										</div>
									)
								)}
							</div>
						</main>
					</section>
					<SideBar />
				</section>
				<Footer />
			</div>
		</LayoutWrapper>
	);
}

export default Projects;
