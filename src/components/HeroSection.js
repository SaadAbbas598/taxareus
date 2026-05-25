import React from 'react';
import { FiArrowRight, FiBarChart2, FiClipboard, FiMessageSquare, FiSettings, FiUser, FiDollarSign, FiCheck, FiSmartphone } from 'react-icons/fi';
import './HeroSection.css';

const HeroSection = () => {
  const handleGetStarted = () => {
    const element = document.getElementById('calculator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>

      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">TRUSTED BY 15K+ CLIENTS</div>
          
          <h1 className="hero-title">
            File Your Taxes in <span className="italic-text">Just 6 Minutes</span>
          </h1>

          <p className="hero-description">
            File using Taxareus services today for only <strong>Rs. 3,500</strong>. Expert handling, maximum refunds, and guaranteed zero stress.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-white btn-lg" onClick={handleGetStarted}>
              Get Started
            </button>
            <button className="btn btn-outline btn-lg">
              View Demo <FiArrowRight size={20} />
            </button>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-dot"></div>
              <span>Trusted by Clients</span>
            </div>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="hero-mockup">
          <div className="phone-frame animate-float">
            <div className="phone-notch"></div>
            <div className="phone-content">
              <div className="phone-header">
                <div className="phone-status">
                  <span>9:41</span>
                </div>
              </div>
              
              <div className="phone-balance">
                <span className="balance-label">Total Refund</span>
                <span className="balance-amount">Rs.705,500</span>
              </div>

              <div className="phone-buttons">
                <button className="phone-btn">
                  <FiBarChart2 className="btn-icon" size={24} />
                  <span>Dashboard</span>
                </button>
                <button className="phone-btn">
                  <FiClipboard className="btn-icon" size={24} />
                  <span>Filing</span>
                </button>
                <button className="phone-btn">
                  <FiMessageSquare className="btn-icon" size={24} />
                  <span>Support</span>
                </button>
                <button className="phone-btn">
                  <FiSettings className="btn-icon" size={24} />
                  <span>Settings</span>
                </button>
              </div>
            </div>
          </div>

          {/* Floating decorative icons */}
          <div className="floating-icon icon-1"><FiUser size={40} /></div>
          <div className="floating-icon icon-2"><FiDollarSign size={40} /></div>
          <div className="floating-icon icon-3"><FiCheck size={40} /></div>
          <div className="floating-icon icon-4"><FiSmartphone size={40} /></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
