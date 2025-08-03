import React, { useState, useContext } from 'react';
import '../styles/SideBar.css';
import react_icon from '../images/react_icon.svg';
import js_icon from '../images/js_icon.svg';
import html_icon from '../images/html_icon.svg';
import css_icon from '../images/css_icon.svg';
import json_icon from '../images/json_icon.svg';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { VscGear } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import myContext from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';

const SideBar: React.FC = () => {
	const context = useContext(myContext);
	if (!context) {
		throw new Error('SideBar must be used within an AppProvider');
	}
	const { activeSideBar } = context;
	const { language } = useLanguage();
	const t = useTranslation(language);
	const [open, setOpen] = useState(true);
	return (
		<aside className={`side-bar-container ${activeSideBar && 'active'}`}>
			<div className="explore-title">
				<p>{t('explorer')}</p>
			</div>
			<button
				type="button"
				className="explore-portfolio"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
				aria-label={t('togglePortfolio')}>
				{open ? <IoIosArrowDown /> : <IoIosArrowForward />}
				{open ? (
					<FaFolderOpen color="#F8B636" />
				) : (
					<FaFolder color="#F8B636" />
				)}
				<p>{t('portfolio')}</p>
			</button>
			{open && (
				<>
					<Link
						to="/"
						className="explorer-file">
						<img
							src={react_icon}
							alt="React icon"
							className="icon-side-bar"
						/>
						<p>{t('home')}</p>
					</Link>
					<Link
						to="/about"
						className="explorer-file">
						<img
							src={html_icon}
							alt="HTML icon"
							className="icon-side-bar"
						/>
						<p>{t('about')}</p>
					</Link>
					<Link
						to="/contact"
						className="explorer-file">
						<img
							src={css_icon}
							alt="CSS icon"
							className="icon-side-bar"
						/>
						<p>{t('contact')}</p>
					</Link>
					<Link
						to="/projects"
						className="explorer-file">
						<img
							src={js_icon}
							alt="JavaScript icon"
							className="icon-side-bar"
						/>
						<p>{t('projects')}</p>
					</Link>
					<Link
						to="/recommendation"
						className="explorer-file">
						<img
							src={json_icon}
							alt="JSON icon"
							className="icon-side-bar"
						/>
						<p>{t('recommendations')}</p>
					</Link>
				</>
			)}

			<section
				className="explore-title"
				id="user">
				<div className="icon-user">
					<a
						href="https://www.linkedin.com/in/andressa-da-costa"
						target="_blank"
						className="icon-container"
						rel="noreferrer noopener"
						aria-label={t('linkedinProfile')}>
						<BiUserCircle
							className="icon-footer"
							id="branch"
						/>
					</a>
				</div>
				<div className="icon-config">
					<a
						href="https://github.com/AndressaDaCosta"
						target="_blank"
						className="icon-container"
						rel="noreferrer noopener"
						aria-label={t('githubProfile')}>
						<VscGear
							className="icon-footer"
							id="branch"
						/>
					</a>
				</div>
			</section>
		</aside>
	);
};

export default SideBar;
