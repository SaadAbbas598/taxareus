import React from 'react';
import './WhyTrust.css';

const WhyTrust = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Unmatched Speed',
      description: 'Get your returns filed in just 6 minutes'
    },
    {
      icon: '✓',
      title: '100% Accuracy',
      description: 'Our experts ensure error-free filing'
    },
    {
      icon: '💬',
      title: 'Expert Support',
      description: 'Chat with tax advisors anytime'
    },
    {
      icon: '🔐',
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
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="trust-image">
            <div className="image-placeholder">
              <div className="image-content">
                <div className="businessman-icon">💼</div>
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
