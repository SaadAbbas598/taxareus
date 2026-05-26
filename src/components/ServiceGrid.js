import React from 'react';
import './ServiceGrid.css';
import { BriefcaseBusiness, Building2, Calculator, CircleDollarSign, FileText, HelpCircle, Landmark, UserRoundCog, UsersRound } from 'lucide-react';

const iconProps = {
  size: 24,
  strokeWidth: 2,
};

const ServiceGrid = () => {
  const services = [
    {
      id: 1,
      title: 'Personal Tax\nFiling',
      icon: FileText,
      color: '#5B7FEF'
    },
    {
      id: 2,
      title: 'Family Tax\nFiling',
      icon: UsersRound,
      color: '#4CAF50'
    },
    {
      id: 3,
      title: 'NTN\nRegistration',
      icon: Landmark,
      color: '#1e4ac4'
    },
    {
      id: 4,
      title: 'IRIS Profile\nUpdate',
      icon: UserRoundCog,
      color: '#808080'
    },
    {
      id: 5,
      title: 'Business\nIncorporation',
      icon: BriefcaseBusiness,
      color: '#4CAF50'
    },
    {
      id: 6,
      title: 'GST\nRegistration',
      icon: Building2,
      color: '#333333'
    },
    {
      id: 7,
      title: 'Service\nCharges',
      icon: CircleDollarSign,
      color: '#FF9500'
    },
    {
      id: 8,
      title: 'Salary Tax\nCalculator',
      icon: Calculator,
      color: '#5B5FEF'
    },
    {
      id: 9,
      title: 'FAQ',
      icon: HelpCircle,
      color: '#FFD700'
    }
  ];

  return (
    <div className="service-grid-section">
      <div className="service-grid">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
          <div key={service.id} className="service-card">
            <div className="service-icon" style={{color: service.color}}>
              <IconComponent {...iconProps} />
            </div>
            <p className="service-title">{service.title}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceGrid;
