import React from 'react';
import './MobileApp.css';
import { FiBell, FiFolder, FiMessageSquare, FiBarChart2, FiPlay, FiDownload } from 'react-icons/fi';

const MobileApp = () => {
  return (
    <section className="app-section" id="app">
      <div className="container">
        <div className="app-grid">
          {/* Left - App Screenshot */}
          <div className="app-mockup">
            <div className="app-phone app-phone-image-frame">
              <img
                className="app-screenshot"
                src="/assets/itax-app-screen.jpeg"
                alt="ITax mobile app dashboard"
              />
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
