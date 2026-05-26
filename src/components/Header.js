import React from 'react';
import { Bell } from 'lucide-react';
import './Header.css';

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
        <Bell size={24} strokeWidth={2} />
        <span className="notification-badge">1</span>
      </button>
    </div>
  );
};

export default Header;
