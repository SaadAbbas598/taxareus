import React from 'react';
import { Home, Mail, Search, Settings } from 'lucide-react';
import './BottomNav.css';

const iconProps = {
  size: 24,
  strokeWidth: 2,
};

const BottomNav = ({ activeNav, setActiveNav }) => {
  return (
    <div className="bottom-nav">
      <button 
        className={`nav-item ${activeNav === 'home' ? 'active' : ''}`}
        onClick={() => setActiveNav('home')}
      >
        <Home {...iconProps} />
        <span>Home</span>
      </button>
      <button 
        className={`nav-item ${activeNav === 'search' ? 'active' : ''}`}
        onClick={() => setActiveNav('search')}
      >
        <Search {...iconProps} />
      </button>
      <button 
        className={`nav-item ${activeNav === 'mail' ? 'active' : ''}`}
        onClick={() => setActiveNav('mail')}
      >
        <Mail {...iconProps} />
      </button>
      <button 
        className={`nav-item ${activeNav === 'settings' ? 'active' : ''}`}
        onClick={() => setActiveNav('settings')}
      >
        <Settings {...iconProps} />
      </button>
    </div>
  );
};

export default BottomNav;
