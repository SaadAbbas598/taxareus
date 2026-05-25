import React from 'react';
import './MainCard.css';

const MainCard = () => {
  return (
    <div className="main-card">
      <div className="card-content">
        <h2 className="card-name">Aslam</h2>
        <p className="card-label">ITax</p>
        <p className="card-number">4756 •••• •••• 8</p>
        <h3 className="card-welcome">Welcome to ITax</h3>
      </div>
      <div className="card-illustration">
        <svg viewBox="0 0 200 150" className="illustration">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#5B7FEF', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#3B5BDE', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          {/* Circles/shapes */}
          <circle cx="150" cy="40" r="45" fill="#5B7FEF" opacity="0.3" />
          <circle cx="130" cy="80" r="35" fill="#3B5BDE" opacity="0.5" />
          {/* People silhouettes */}
          <circle cx="80" cy="100" r="8" fill="#FFA500" />
          <rect x="75" y="110" width="10" height="15" fill="#FFA500" />
          <circle cx="100" cy="105" r="7" fill="#4CAF50" />
          <rect x="95" y="115" width="10" height="12" fill="#4CAF50" />
          {/* Bar chart */}
          <rect x="110" y="115" width="6" height="12" fill="#FF6B6B" />
          <rect x="120" y="110" width="6" height="17" fill="#FFD700" />
          <rect x="130" y="108" width="6" height="19" fill="#4CAF50" />
        </svg>
      </div>
    </div>
  );
};

export default MainCard;
