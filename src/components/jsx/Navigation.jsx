import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
    <Navbar expand="md" className="navbar" expanded={isMenuOpen}>
      <Container className="nav-container">
        <Navbar.Brand as={Link} to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">BDE P.T.</span>
          <span className="logo-tagline">Buckwinkler, Douglas, & Edwards</span>
        </Navbar.Brand>

        <Navbar.Toggle 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="nav-toggle"
        />

        <Navbar.Collapse>
          <Nav className="ms-auto nav-menu">
            <Nav.Link 
              as={Link}
              to="/" 
              className={`nav-link ${isActive('/') || isActive('/de-pt-web') || isActive('/de-pt-web/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/contact" 
              className={`nav-link ${isActive('/contact') || isActive('/de-pt-web/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/resources" 
              className={`nav-link ${isActive('/resources') || isActive('/de-pt-web/resources') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-book"></i>
              <span>Resources</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
