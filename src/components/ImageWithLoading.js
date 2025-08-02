import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../data/translations';

const ImageWithLoading = ({ src, alt, className }) => {
	const { language } = useLanguage();
	const t = useTranslation(language);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const handleLoad = () => {
		setIsLoading(false);
	};

	const handleError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	return (
		<div
			className="img-container"
			style={{ position: 'relative' }}>
			{isLoading && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#1e2139',
						borderRadius: '5px'
					}}>
					<span style={{ color: '#607B96' }}>{t('loading')}</span>
				</div>
			)}
			{hasError ? (
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#1e2139',
						borderRadius: '5px',
						color: '#607B96'
					}}>
					<span>{t('imageNotAvailable')}</span>
				</div>
			) : (
				<img
					src={src.startsWith('http') ? src : `/${src}`}
					alt={alt}
					className={className}
					onLoad={handleLoad}
					onError={handleError}
					style={{ display: isLoading ? 'none' : 'block' }}
				/>
			)}
		</div>
	);
};

export default ImageWithLoading;
