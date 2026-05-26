import React from 'react';
import { FileText, Globe, Building2, Calculator, Smartphone, Clock } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FileText,
      title: 'Individual Tax Filing',
      description:
        'Hassle-free filing for salaried individuals with automatic tax calculations, rebates, and pre-filled data.',
    },
    {
      id: 2,
      icon: Globe,
      title: 'NTN Registration',
      description:
        'Quickly register your National Tax Number for individuals and businesses with full compliance guidance.',
    },
    {
      id: 3,
      icon: Building2,
      title: 'Business Incorporation',
      description:
        'Register your company with SECP, FBR, and relevant authorities — complete incorporation services.',
    },
    {
      id: 4,
      icon: Calculator,
      title: 'GST Registration',
      description:
        'Sales tax registration and monthly return filing with FBR, ensuring complete compliance and timely submissions.',
    },
    {
      id: 5,
      icon: Smartphone,
      title: 'USA Services',
      description:
        'Comprehensive US tax filing for citizens and residents, including FATCA compliance and LLC formation.',
    },
    {
      id: 6,
      icon: Clock,
      title: 'Tax Planning',
      description:
        'Strategic tax advisory to legally minimize your tax liability with expert planning and structured solutions.',
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Heading */}
        <div className="services-heading-wrapper">
          <p className="services-tag">What We Offer</p>
          <h2 className="services-main-heading">Comprehensive Tax Services</h2>
          <p className="services-description">
            From individual tax returns to complex business compliance, we handle every aspect of your tax journey with precision and care.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">

                {/* Row: icon + title side by side */}
                <div className="service-card-header">
                  <div className="service-card-icon">
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                </div>

                {/* Description below the header row */}
                <p className="service-card-description">{service.description}</p>

                {/* CTA */}
                <a href="#contact" className="service-card-link">
                  Learn More <span className="arrow">→</span>
                </a>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;