import React, { useContext } from "react";
import myContext from "../context/AppContext";

const MenuMobile: React.FC = () => {
  const context = useContext(myContext);
  if (!context) {
    throw new Error('MenuMobile must be used within an AppProvider');
  }
  const {activeSideBar, setActiveSideBar} = context;
  return ( 
    <button type="button" className="hamburger-menu" onClick={ () => setActiveSideBar(!activeSideBar) }>
      <div className={`line-1 ${activeSideBar && 'active'}`}></div>
      <div className={`line-2 ${activeSideBar && 'active'}`}></div>
      <div className={`line-3 ${activeSideBar && 'active'}`}></div>
    </button> 
  );
};

export default MenuMobile;