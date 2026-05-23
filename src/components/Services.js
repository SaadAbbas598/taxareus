import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '👤',
      title: 'Personal Tax Filing',
      description: 'File your personal income tax return with ease. Our experts handle all the documentation.',
      link: 'Learn More'
    },
    {
      id: 2,
      icon: '📋',
      title: 'Tax Registrations',
      description: 'Get your NTN and CNIC registrations completed quickly with proper FBR compliance.',
      link: 'Learn More'
    },
    {
      id: 3,
      icon: '💼',
      title: 'Business Representation',
      description: 'Professional tax representation for your business with complete filing support.',
      link: 'Learn More'
    },
    {
      id: 4,
      icon: '📄',
      title: 'NTN Registration',
      description: 'Complete NTN registration services for individuals and businesses with instant approval.',
      link: 'Learn More'
    },
    {
      id: 5,
      icon: '💰',
      title: 'Tax Refunds',
      description: 'Maximize your tax refunds with our expert analysis and strategic filing approach.',
      link: 'Learn More'
    },
    {
      id: 6,
      icon: '🛡️',
      title: 'Audit Support',
      description: 'Complete audit support and representation with FBR and tax authorities.',
      link: 'Learn More'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-intro">
          <div className="services-badge">What We Handle</div>
          <h2 className="section-heading services-heading">Comprehensive Tax Services</h2>
          <p className="section-subheading services-subheading">
            Everything you need to file, track, and optimize your taxes. Fast, reliable, and completely hassle-free.
          </p>

          <div className="services-stats" aria-label="Service highlights">
            <div className="service-stat">
              <span className="service-stat-value">6</span>
              <span className="service-stat-label">Core services</span>
            </div>
            <div className="service-stat">
              <span className="service-stat-value">24/7</span>
              <span className="service-stat-label">Support</span>
            </div>
            <div className="service-stat">
              <span className="service-stat-value">100%</span>
              <span className="service-stat-label">Compliance focus</span>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              
              <p className="service-description">{service.description}</p>
              
              <a href="#contact" className="service-link">
                {service.link} <FiArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
