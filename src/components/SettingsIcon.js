import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/SettingsIcon.css';

const SettingsIcon = () => {
	return (
		<Link to="/settings" className="settings-icon" title="Settings">
			<FiSettings />
		</Link>
	);
};

export default SettingsIcon;