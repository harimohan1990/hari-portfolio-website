import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">Hari Mohan</div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {['/', '/about', '/experience', '/projects', '/skills', '/awards', '/contact'].map((path, idx) => {
          const labels = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Awards', 'Contact'];
          return (
            <li key={path}>
              <Link to={path} onClick={() => setMenuOpen(false)}>{labels[idx]}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
