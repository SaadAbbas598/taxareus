import React from 'react';
import './ServiceGrid.css';
import { FiFileText, FiHome, FiUsers, FiUser, FiBriefcase, FiBarChart2, FiDollarSign, FiCalculator, FiHelpCircle } from 'react-icons/fi';

const ServiceGrid = () => {
  const services = [
    {
      id: 1,
      title: 'Personal Tax\nFiling',
      icon: <FiFileText size={32} />,
      color: '#5B7FEF'
    },
    {
      id: 2,
      title: 'Family Tax\nFiling',
      icon: <FiUsers size={32} />,
      color: '#4CAF50'
    },
    {
      id: 3,
      title: 'NTN\nRegistration',
      icon: <FiHome size={32} />,
      color: '#1e4ac4'
    },
    {
      id: 4,
      title: 'IRIS Profile\nUpdate',
      icon: <FiUser size={32} />,
      color: '#808080'
    },
    {
      id: 5,
      title: 'Business\nIncorporation',
      icon: <FiBriefcase size={32} />,
      color: '#4CAF50'
    },
    {
      id: 6,
      title: 'GST\nRegistration',
      icon: <FiBarChart2 size={32} />,
      color: '#333333'
    },
    {
      id: 7,
      title: 'Service\nCharges',
      icon: <FiDollarSign size={32} />,
      color: '#FF9500'
    },
    {
      id: 8,
      title: 'Salary Tax\nCalculator',
      icon: <FiCalculator size={32} />,
      color: '#5B5FEF'
    },
    {
      id: 9,
      title: 'FAQ',
      icon: <FiHelpCircle size={32} />,
      color: '#FFD700'
    }
  ];

  return (
    <div className="service-grid-section">
      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon" style={{color: service.color}}>
              {service.icon}
            </div>
            <p className="service-title">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
