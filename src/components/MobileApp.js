import React from 'react';
import './MobileApp.css';
import { Bell, Download, FolderUp, MessageCircle, Play, SlidersHorizontal } from 'lucide-react';

const iconProps = {
  strokeWidth: 2,
};

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
                <Download className="app-store-icon" size={20} {...iconProps} /> App Store
              </button>
              <button className="btn btn-secondary">
                <Play className="play-store-icon" size={20} {...iconProps} /> Play Store
              </button>
            </div>

            {/* Features */}
            <div className="app-features">
              <div className="app-feature">
                <SlidersHorizontal className="feature-icon" size={24} {...iconProps} />
                <p>Real-time Dashboard</p>
              </div>
              <div className="app-feature">
                <FolderUp className="feature-icon" size={24} {...iconProps} />
                <p>Document Upload</p>
              </div>
              <div className="app-feature">
                <MessageCircle className="feature-icon" size={24} {...iconProps} />
                <p>Expert Chat Support</p>
              </div>
              <div className="app-feature">
                <Bell className="feature-icon" size={24} {...iconProps} />
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
