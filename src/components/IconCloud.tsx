import React from 'react';
import allIcons from 'simple-icons';
import { v4 } from 'uuid';
import { IconCloud } from 'react-icon-cloud';

const Componente: React.FC = () => {
	const tagCanvasOptions = {
		clickToFront: 500,
		depth: 1,
		imageScale: 2,
		initial: [0.1, -0.1],
		outlineColour: '#0000',
		reverse: true,
		tooltip: 'native',
		tooltipDelay: 0,
		wheelZoom: false
	};
	const iconSlugs = [
		'kotlin',
		'java',
		'jetpackcompose',
		'firebase',
		'react',
		'nextdotjs',
		'nodedotjs',
		'typescript',
		'javascript',
		'git',
		'github',
		'angular',
		'android',
		'kotlin',
		'css3',
		'html5',
		'tailwindcss',
		'visualstudiocode',
		'amazonaws',
		'awslambda',
		'figma'
	];
	const iconTags = iconSlugs.map((slug) => {
		const icon = allIcons.Get(slug);
		return {
			id: slug,
			simpleIcon: icon
		};
	});
	return (
		<div className="iconCloud-container">
			<IconCloud
				key={v4()}
				id={'icon'}
				minContrastRatio={1}
				iconSize={45}
				backgroundHexColor={'#fff'}
				fallbackHexColor={'#000'}
				tags={iconTags}
				tagCanvasOptions={tagCanvasOptions}
			/>
		</div>
	);
};

export default Componente;
