import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const handleGetStarted = () => {
    const element = document.getElementById('calculator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            File Your Taxes In Just 6 Minutes With Our Qualified Consultants!
          </h1>

          <p className="hero-price">Now available in just Rs. 3,500/-</p>

          <p className="hero-description">
            We go beyond tax filing! We also help with all your business
            registration, sales tax filing, trademark registration, and LLC
            registration in the USA — all in one place.
          </p>

          <div className="hero-buttons">
            <button className="btn-file-now" onClick={handleGetStarted}>
              File Now <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Taxes Filed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9</span>
              <span className="stat-label">User Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6 Min</span>
              <span className="stat-label">Avg. Filing Time</span>
            </div>
          </div>
        </div>

        {/* Right: single hero image */}
        <div className="hero-mockup">
          <img
            src="/assets/hero.png"
            alt="Taxareus Hero"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;