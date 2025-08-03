import React from "react";
import '../styles/Header.css';
import MenuBar from "../components/MenuBar";
import react_icon from '../images/react_icon.svg'
import js_icon from '../images/js_icon.svg'
import html_icon from '../images/html_icon.svg'
import css_icon from '../images/css_icon.svg'
import json_icon from '../images/json_icon.svg'

const Header: React.FC = () => {
  return ( 
    <header className="header-container">
      <nav className="nav-container">
        <MenuBar 
          icon={ react_icon }
          name='home.jsx'
          path="/"
        /> 
        <MenuBar 
          icon={ html_icon }
          name='about.html'
          path="/about"
        />
        <MenuBar 
          icon={ css_icon }
          name='contact.css'
          path="/contact"
        /> 
        <MenuBar 
          icon={ js_icon }
          name='projects.js'
          path="/projects"
        />
        <MenuBar 
          icon={ json_icon }
          name='recommendations.json'
          path="/recommendation"
        /> 
        
      </nav>
    </header>
  );
};

export default Header;