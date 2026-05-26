import React from 'react';
import { BadgeCheck, FileCheck2, UploadCloud, UserPlus } from 'lucide-react';
import './HowItWorks.css';

const iconProps = {
  strokeWidth: 2,
};

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your account and provide basic information in under 2 minutes',
      icon: UserPlus,
      buttonText: 'Get Started'
    },
    {
      number: '02',
      title: 'Upload Documents',
      description: 'Upload your tax documents, receipts, and financial records securely',
      icon: UploadCloud,
      buttonText: 'Upload Now'
    },
    {
      number: '03',
      title: 'Expert Review',
      description: 'Our tax experts review your documents and optimize for maximum refund',
      icon: BadgeCheck,
      buttonText: 'Learn More'
    },
    {
      number: '04',
      title: 'File & Done',
      description: 'We file your return with FBR and track your refund status in real-time',
      icon: FileCheck2,
      buttonText: 'Track Status'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-heading">How Taxareus Works</h2>
          <p className="section-subheading">Simple 4-step process to file your taxes worry-free</p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={`step-${step.number}`} className="step-card">
                <div className="step-icon-wrapper">
                  <IconComponent size={24} className="step-icon" {...iconProps} />
                </div>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <button className="step-button">{step.buttonText}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
