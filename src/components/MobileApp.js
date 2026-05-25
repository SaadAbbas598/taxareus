import React, { useState } from 'react';
import './MobileApp.css';
import { FiHome, FiSearch, FiMail, FiSettings, FiClipboard, FiUsers, FiBriefcase, FiUser, FiDollarSign, FiCreditCard, FiTrendingUp, FiHelpCircle, FiBell, FiFolder, FiMessageSquare, FiBarChart2, FiPlay, FiDownload } from 'react-icons/fi';

const MobileApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const services = [
    { icon: FiClipboard, name: 'Personal Tax', label: 'Filing' },
    { icon: FiUsers, name: 'Family Tax', label: 'Filing' },
    { icon: FiBriefcase, name: 'NTN', label: 'Registration' },
    { icon: FiUser, name: 'IRIS Profile', label: 'Update' },
    { icon: FiDollarSign, name: 'Business', label: 'Incorporation' },
    { icon: FiBriefcase, name: 'GST', label: 'Registration' },
    { icon: FiCreditCard, name: 'Service', label: 'Charges' },
    { icon: FiTrendingUp, name: 'Salary Tax', label: 'Calculator' },
    { icon: FiHelpCircle, name: 'FAQ', label: '' },
  ];

  return (
    <section className="app-section" id="app">
      <div className="container">
        <div className="app-grid">
          {/* Left - Phone Mockup */}
          <div className="app-mockup">
            <div className={`app-phone ${isDarkMode ? 'dark-mode' : ''}`}>
              <div className="phone-notch-app"></div>
              
              <div className="app-screen">
                <div className={`app-content ${isDarkMode ? 'dark' : 'light'}`}>
                  {/* Status Bar */}
                  <div className="status-bar">
                    <span>9:09</span>
                    <div className="status-icons">📡 🔋</div>
                  </div>

                  {/* Header with Profile */}
                  <div className="app-header-section">
                    <div className="user-profile">
                      <div className="profile-avatar"><FiUser size={28} /></div>
                      <div className="user-info">
                        <h4>Hi, Aslam</h4>
                      </div>
                      <FiBell className="notification-bell" size={24} />
                    </div>
                  </div>

                  {/* Welcome Card */}
                  <div className="welcome-card">
                    <div className="card-left">
                      <h3>Aslam</h3>
                      <p className="card-label">ITax</p>
                      <p className="card-number">4756 •••• •••• 8</p>
                      <p className="card-welcome">Welcome to ITax</p>
                    </div>
                    <div className="card-illustration"><FiHome size={40} /></div>
                  </div>

                  {/* Services Grid */}
                  <div className="services-grid">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <div key={service.name} className="service-card">
                          <IconComponent className="service-icon" size={24} />
                          <p className="service-name">{service.name}</p>
                          {service.label && <p className="service-label">{service.label}</p>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="app-bottom-nav">
                    <button className="nav-item active">
                      <FiHome size={24} />
                      <span>Home</span>
                    </button>
                    <button className="nav-item">
                      <FiSearch size={24} />
                      <span>Search</span>
                    </button>
                    <button className="nav-item">
                      <FiMail size={24} />
                      <span>Mail</span>
                    </button>
                    <button className="nav-item">
                      <FiSettings size={24} />
                      <span>Settings</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="phone-home"></div>
            </div>
          </div>


          {/* Right - Content */}
          <div className="app-content-section">
            <h2 className="app-heading">
              Download Taxareus App Now
            </h2>

            <p className="app-description">
              Access all tax services on mobile. File returns, track refunds, upload documents, and chat with experts anytime, anywhere. Available on iOS and Android.
            </p>

            {/* Theme Toggle */}
            <div className="theme-toggle-section">
              <label className="theme-toggle">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>

            {/* Download Buttons */}
            <div className="download-buttons">
              <button className="btn btn-primary">
                <FiDownload className="app-store-icon" size={20} /> App Store
              </button>
              <button className="btn btn-secondary">
                <FiPlay className="play-store-icon" size={20} /> Play Store
              </button>
            </div>

            {/* Features */}
            <div className="app-features">
              <div className="app-feature">
                <FiBarChart2 className="feature-icon" size={28} />
                <p>Real-time Dashboard</p>
              </div>
              <div className="app-feature">
                <FiFolder className="feature-icon" size={28} />
                <p>Document Upload</p>
              </div>
              <div className="app-feature">
                <FiMessageSquare className="feature-icon" size={28} />
                <p>Expert Chat Support</p>
              </div>
              <div className="app-feature">
                <FiBell className="feature-icon" size={28} />
                <p>Instant Notifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
