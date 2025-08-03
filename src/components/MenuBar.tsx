import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuBarProps {
	name: string;
	icon: string;
	path: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ name, icon, path }) => {
	const { pathname } = useLocation();
	return (
		<Link
			type="button"
			to={path}
			className={`nav-bar ${pathname === path && 'active'}`}>
			<img
				src={icon}
				alt={`${name} icon`}
				className="icon-nav"
			/>
			<p>{name}</p>
		</Link>
	);
};

export default memo(MenuBar);
