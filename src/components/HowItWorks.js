import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your account and provide basic information in under 2 minutes'
    },
    {
      number: '02',
      title: 'Upload Documents',
      description: 'Upload your tax documents, receipts, and financial records securely'
    },
    {
      number: '03',
      title: 'Expert Review',
      description: 'Our tax experts review your documents and optimize for maximum refund'
    },
    {
      number: '04',
      title: 'File & Done',
      description: 'We file your return with FBR and track your refund status in real-time'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-heading">How Taxareus Works</h2>
          <p className="section-subheading">Simple 4-step process to file your taxes worry-free</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={`step-${step.number}`} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
