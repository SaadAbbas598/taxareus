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
              View Demo <ArrowRight size={20} strokeWidth={2} />
            </button>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-dot"></div>
              <span>Trusted by Clients</span>
            </div>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="hero-mockup">
          <img 
            src="/assets/hero-image.jpg" 
            alt="Taxareus App - File Your Taxes in Just 6 Minutes"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
