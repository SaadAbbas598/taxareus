import React from 'react';
import './Header.css';
import { FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="header">
      <div className="header-profile">
        <div className="profile-avatar">A</div>
        <div className="profile-greeting">
          <h1>Hi, Aslam</h1>
        </div>
      </div>
      <button className="header-notification">
        <FiBell size={24} />
        <span className="notification-badge">1</span>
      </button>
    </div>
  );
};

export default Header;
