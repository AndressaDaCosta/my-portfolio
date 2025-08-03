import React, { useRef, useEffect, useContext, ReactNode } from 'react';
import myContext from '../context/AppContext';

interface LayoutWrapperProps {
	children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
	const context = useContext(myContext);
	if (!context) {
		throw new Error('LayoutWrapper must be used within an AppProvider');
	}
	const { activeSideBar, setActiveSideBar } = context;
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			// Verifica se a sidebar está ativa
			if (!activeSideBar) return;

			const sidebar = document.querySelector('.side-bar-container');
			const hamburgerMenu = document.querySelector('.hamburger-menu');

			// Se clicou fora da sidebar e do menu hamburguer, fecha a sidebar
			if (
				sidebar &&
				hamburgerMenu &&
				!sidebar.contains(event.target as Node) &&
				!hamburgerMenu.contains(event.target as Node)
			) {
				setActiveSideBar(false);
			}
		}

		// Adiciona o event listener ao documento
		document.addEventListener('mousedown', handleClickOutside);

		// Cleanup do event listener
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [activeSideBar, setActiveSideBar]);

	return (
		<div
			ref={containerRef}
			className="layout-wrapper">
			{children}
		</div>
	);
};

export default LayoutWrapper;
