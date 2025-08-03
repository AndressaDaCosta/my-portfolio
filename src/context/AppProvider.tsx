import React, { useState, ReactNode } from 'react';
import AppContext from './AppContext';

interface AppProviderProps {
	children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [activeSideBar, setActiveSideBar] = useState(false);
	const state = {
		activeSideBar,
		setActiveSideBar
	};
	return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
