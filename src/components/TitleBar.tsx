import React from 'react';
import '../styles/TitleBar.css';
import { BsCodeSlash } from 'react-icons/bs';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';

const TitleBar: React.FC = () => {
	const { language, setLanguage } = useLanguage();
	const t = useTranslation(language);

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value as 'pt-BR' | 'en');
	};

	return (
		<section className="title-bar">
			<div className="title-itens">
				<p> {t('file')}</p>
				<p>{t('edit')}</p>
				<p>{t('view')}</p>
				<p>{t('go')}</p>
				<p>{t('run')}</p>
				<p>{t('terminal')}</p>
				<p>{t('help')} </p>
			</div>

			<div className="title-itens2">
				<p>{t('portfolioTitle')} </p>
				<BsCodeSlash
					className="icon-footer"
					id="branch"
				/>
			</div>
			<div className="title-btn">
				<span className="close" />
				<span className="minimize" />
				<span className="maximize" />
			</div>
			<select
				className="select-language"
				value={language}
				onChange={handleLanguageChange}
				aria-label="Select language">
				<option value="en">🇺🇸 en-US</option>
				<option value="pt-BR">🇧🇷 pt-BR</option>
			</select>
		</section>
	);
};

export default TitleBar;
