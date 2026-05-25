import React from 'react';
import './BottomNav.css';
import { FiHome, FiSearch, FiMail, FiSettings } from 'react-icons/fi';

const BottomNav = ({ activeNav, setActiveNav }) => {
  return (
    <div className="bottom-nav">
      <button 
        className={`nav-item ${activeNav === 'home' ? 'active' : ''}`}
        onClick={() => setActiveNav('home')}
      >
        <FiHome size={24} />
        <span>Home</span>
      </button>
      <button 
        className={`nav-item ${activeNav === 'search' ? 'active' : ''}`}
        onClick={() => setActiveNav('search')}
      >
        <FiSearch size={24} />
      </button>
      <button 
        className={`nav-item ${activeNav === 'mail' ? 'active' : ''}`}
        onClick={() => setActiveNav('mail')}
      >
        <FiMail size={24} />
      </button>
      <button 
        className={`nav-item ${activeNav === 'settings' ? 'active' : ''}`}
        onClick={() => setActiveNav('settings')}
      >
        <FiSettings size={24} />
      </button>
    </div>
  );
};

export default BottomNav;
