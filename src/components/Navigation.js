import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navigation.css';

const Navigation = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={scrollToTop}>
          <div className="logo-icon">T</div>
          <span>Taxareus</span>
        </div>

        {/* Desktop Menu */}
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }} className="nav-link">Services</a>
          <a href="#calculator" onClick={(e) => { e.preventDefault(); handleNavClick('calculator'); }} className="nav-link">Calculator</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }} className="nav-link">Pricing</a>
          <a href="#app" onClick={(e) => { e.preventDefault(); handleNavClick('app'); }} className="nav-link">App</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="nav-link">Contact</a>
        </div>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="navbar-actions">
          <button className="btn btn-primary btn-sm">Get a Quote</button>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
