import React, { memo } from 'react';
import { BsXCircle, BsBraces, BsCheck2All, BsBell } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';
import { DiReact } from 'react-icons/di';
import { FiAlertTriangle } from 'react-icons/fi';
import '../styles/Footer.css';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';

const Footer: React.FC = () => {
	const { language } = useLanguage();
	const t = useTranslation(language);
	let iconReactStyles = { color: 'aqua', fontSize: '1.5em' };
	return (
		<footer className="footer-container">
			<div className="links-footer">
				<a
					href="https://github.com/AndressaDaCosta"
					target="_blank"
					className="icon-container"
					rel="noreferrer noopener"
					aria-label={t('githubProfile')}>
					<BiGitBranch
						className="icon-footer"
						id="branch"
					/>
				</a>
				<p id="main">main</p>

				<a
					href="https://www.linkedin.com/in/andressa-da-costa"
					target="_blank"
					className="icon-container"
					rel="noreferrer"
					aria-label={t('linkedinProfile')}>
					<BsXCircle className="icon-footer two" />
				</a>
				<p id="zero">|</p>

				<FiAlertTriangle className="icon-footer two" />
				<p className="text-footer">{t('developedWith')}</p>

				<p id="info">| Ln25,Col58 Spaces:4 UTF-8</p>

				<BsCheck2All className="icon-footer two" />
				<p id="prettier">{t('prettier')}</p>
				<BsBraces className="icon-footer two" />
				<p id="js">{t('javascript')}</p>
				<DiReact
					style={iconReactStyles}
					className="icon-footer two"
				/>
				<p id="react">{t('react')} </p>
				<BsBell className="icon-footer two" />
			</div>
		</footer>
	);
};

export default memo(Footer);
