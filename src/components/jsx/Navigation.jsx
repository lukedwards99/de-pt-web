import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">D&E P.T.</span>
          <span className="logo-tagline">Douglas & Edwards</span>
        </Link>

        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') || isActive('/de-pt-web') || isActive('/de-pt-web/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') || isActive('/de-pt-web/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/resources" 
              className={`nav-link ${isActive('/resources') || isActive('/de-pt-web/resources') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-book"></i>
              <span>Resources</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
