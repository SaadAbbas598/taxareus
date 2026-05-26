import React from 'react';
import { BadgeCheck, Headset, LockKeyhole, Zap } from 'lucide-react';
import './WhyTrust.css';

const iconProps = {
  strokeWidth: 2,
};

const WhyTrust = () => {
  const features = [
    {
      icon: Zap,
      title: 'Unmatched Speed',
      description: 'Get your returns filed in just 6 minutes'
    },
    {
      icon: BadgeCheck,
      title: '100% Accuracy',
      description: 'Our experts ensure error-free filing'
    },
    {
      icon: Headset,
      title: 'Expert Support',
      description: 'Chat with tax advisors anytime'
    },
    {
      icon: LockKeyhole,
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
                    <div className="feature-icon-shell">
                      <IconComponent className="feature-icon" size={24} {...iconProps} />
                    </div>
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
              <img src="/assets/trust.jpg" alt="Professional Trust" className="trust-image-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;
