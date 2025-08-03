import { createContext } from "react";

interface AppContextType {
	activeSideBar: boolean;
	setActiveSideBar: (active: boolean) => void;
}

const myContext = createContext<AppContextType | undefined>(undefined);
export default myContext;