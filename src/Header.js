// src/components/Header.js

import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-list">
         <button> <li><a href="#about">About Me</a></li></button>
         <button>  <li><a href="#skills">Skills</a></li></button>
         <button><li><a href="#projects">Projects</a></li></button>
         <button><li><a href="#experience">Experience</a></li></button>
         <button><li><a href="#education">Education</a></li></button>
         <button><li><a href="#contact">Contact</a></li></button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
