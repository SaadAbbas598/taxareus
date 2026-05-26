import React from 'react';
import { BriefcaseBusiness, ClipboardCheck, FileBadge2, ShieldCheck, TrendingUp, UserRound } from 'lucide-react';
import './Services.css';

const iconProps = {
  strokeWidth: 2,
};

const Services = () => {
  const services = [
    {
      id: 1,
      meta: 'Individual returns',
      icon: UserRound,
      title: 'Personal Tax Filing',
      visualLines: [
        { text: 'How to' },
        { text: 'File Personal', highlight: true },
        { text: 'Taxes in Pakistan' },
      ],
      image: '/assets/hero-image.jpg',
      imagePosition: '72% center',
      description: 'File your personal income tax return with ease. Our experts handle all the documentation.',
    },
    {
      id: 2,
      meta: 'FBR onboarding',
      icon: ClipboardCheck,
      title: 'Tax Registrations',
      visualLines: [
        { text: 'Register with' },
        { text: 'FBR & NTN', highlight: true },
        { text: 'the Right Way' },
      ],
      image: '/assets/itax-app-screen.jpeg',
      imagePosition: '58% center',
      description: 'Get your NTN and CNIC registrations completed quickly with proper FBR compliance.',
    },
    {
      id: 3,
      meta: 'Business advisory',
      icon: BriefcaseBusiness,
      title: 'Business Representation',
      visualLines: [
        { text: 'Professional' },
        { text: 'Business Tax', highlight: true },
        { text: 'Representation' },
      ],
      image: '/assets/hero-image.jpg',
      imagePosition: '42% center',
      description: 'Professional tax representation for your business with complete filing support.',
    },
    {
      id: 4,
      meta: 'NTN setup',
      icon: FileBadge2,
      title: 'NTN Registration',
      visualLines: [
        { text: 'How to Get' },
        { text: 'Your NTN', highlight: true },
        { text: 'Without Delays' },
      ],
      image: '/assets/logo.jpeg',
      imagePosition: 'center',
      description: 'Complete NTN registration services for individuals and businesses with instant approval.',
    },
    {
      id: 5,
      meta: 'Refund strategy',
      icon: TrendingUp,
      title: 'Tax Refunds',
      visualLines: [
        { text: 'Maximize Your' },
        { text: 'Tax Refunds', highlight: true },
        { text: 'with Experts' },
      ],
      image: '/assets/itax-app-screen.jpeg',
      imagePosition: '50% 22%',
      description: 'Maximize your tax refunds with our expert analysis and strategic filing approach.',
    },
    {
      id: 6,
      meta: 'Compliance support',
      icon: ShieldCheck,
      title: 'Audit Support',
      visualLines: [
        { text: 'Stay Ready for' },
        { text: 'FBR Audits', highlight: true },
        { text: 'and Notices' },
      ],
      image: '/assets/hero-image.jpg',
      imagePosition: '82% center',
      description: 'Complete audit support and representation with FBR and tax authorities.',
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
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div
                  className="service-visual"
                  style={{
                    '--service-image': `url(${service.image})`,
                    '--service-image-position': service.imagePosition,
                  }}
                >
                  <div className="service-brand-mark">T</div>
                  <div className="service-visual-content">
                    <h3>
                      {service.visualLines.map((line) => (
                        <span
                          key={line.text}
                          className={line.highlight ? 'visual-line visual-line-highlight' : 'visual-line'}
                        >
                          {line.text}
                        </span>
                      ))}
                    </h3>
                  </div>
                  <div className="service-icon-wrapper">
                    <IconComponent className="service-icon" size={24} {...iconProps} />
                  </div>
                </div>

                <div className="service-card-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
