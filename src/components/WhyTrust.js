import React from 'react';
import { FiZap, FiCheck, FiHeadphones, FiLock, FiBriefcase } from 'react-icons/fi';
import './WhyTrust.css';

const WhyTrust = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Unmatched Speed',
      description: 'Get your returns filed in just 6 minutes'
    },
    {
      icon: FiCheck,
      title: '100% Accuracy',
      description: 'Our experts ensure error-free filing'
    },
    {
      icon: FiHeadphones,
      title: 'Expert Support',
      description: 'Chat with tax advisors anytime'
    },
    {
      icon: FiLock,
      title: 'Data Security',
      description: 'Bank-level encryption for your data'
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          {/* Left Content */}
          <div className="trust-content">
            <h2 className="trust-heading">
              Why Leading Professionals Trust Taxareus
            </h2>

            <div className="features-list">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={`feature-${feature.icon.name}`} className="feature-item">
                    <IconComponent className="feature-icon" size={32} />
                    <div className="feature-text">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="trust-image">
            <div className="image-placeholder">
              <div className="image-content">
                <FiBriefcase className="businessman-icon" size={64} />
                <p>Professional Businessman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;
