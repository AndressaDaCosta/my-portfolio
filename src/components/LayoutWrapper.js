import React, { useRef, useEffect, useContext } from 'react';
import myContext from '../context/AppContext';

function LayoutWrapper({ children }) {
	const { activeSideBar, setActiveSideBar } = useContext(myContext);
	const containerRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			// Verifica se a sidebar está ativa
			if (!activeSideBar) return;

			const sidebar = document.querySelector('.side-bar-container');
			const hamburgerMenu = document.querySelector('.hamburger-menu');

			// Se clicou fora da sidebar e do menu hamburguer, fecha a sidebar
			if (
				sidebar &&
				hamburgerMenu &&
				!sidebar.contains(event.target) &&
				!hamburgerMenu.contains(event.target)
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
}

export default LayoutWrapper;
