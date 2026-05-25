import React from 'react';
import { FiCheck, FiTrendingUp, FiDollarSign, FiShield } from 'react-icons/fi';
import './Pricing.css';

const Pricing = () => {
  const features = [
    'Individual Income Tax Return',
    'Wealth Statement Preparation',
    'ITR/FBR Tax Refund Analysis',
    '180 Days ITR Management',
    'Dedicated Tax Consultant'
  ];

  const handleStartFiling = () => {
    const element = document.getElementById('calculator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-background">
        <div className="pricing-circle circle-1"></div>
        <div className="pricing-circle circle-2"></div>
      </div>

      <div className="container">
        <h2 className="section-heading">Simple Transparent Pricing</h2>

        <div className="pricing-card">
          <div className="price-header">
            <span className="currency">₨</span>
            <span className="amount">3,500</span>
            <span className="period">per return</span>
          </div>

          <div className="features-checklist">
            {features.map((feature, index) => (
              <div key={`feature-${feature}`} className="feature-check-item">
                <FiCheck className="check-icon" size={20} />
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>

          <button className="btn btn-primary btn-lg" onClick={handleStartFiling}>
            Start Your Filing
          </button>

          <p className="pricing-note">
            No hidden charges. Simple, transparent pricing for professional tax filing.
          </p>
        </div>

        <div className="pricing-benefits">
          <div className="benefit-item">
            <FiTrendingUp className="benefit-icon" size={32} />
            <p>Fast Processing</p>
          </div>
          <div className="benefit-item">
            <FiCheck className="benefit-icon" size={32} />
            <p>Accuracy</p>
          </div>
          <div className="benefit-item">
            <FiDollarSign className="benefit-icon" size={32} />
            <p>Maximum Refunds</p>
          </div>
          <div className="benefit-item">
            <FiShield className="benefit-icon" size={32} />
            <p>Secure & Confidential</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
