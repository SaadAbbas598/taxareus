// Tax Slabs Configuration for Pakistan
export const TAX_SLABS = [
  { from: 0, to: 600000, rate: 0 },
  { from: 600001, to: 1200000, rate: 2.5 },
  { from: 1200001, to: 2400000, rate: 12.5 },
  { from: 2400001, to: 3600000, rate: 20 },
  { from: 3600001, to: 6000000, rate: 25 },
  { from: 6000001, to: 12000000, rate: 32.5 },
  { from: 12000001, to: Infinity, rate: 35 },
];

// Colors Configuration
export const COLORS = {
  PRIMARY: '#4A4AFF',
  PRIMARY_DARK: '#3A3ACF',
  PRIMARY_LIGHT: '#5B5BFF',
  SECONDARY_LIGHT: '#F5F3FF',
  SECONDARY_LIGHTER: '#EDE9FE',
  TEXT_DARK: '#1A1A1A',
  TEXT_LIGHT: '#666666',
  BORDER_COLOR: '#E5E5E5',
  BACKGROUND_LIGHT: '#F9FAFB',
  BACKGROUND_WHITE: '#FFFFFF',
  SUCCESS_COLOR: '#10B981',
  ERROR_COLOR: '#EF4444',
  FOOTER_BG: '#1A1A4D',
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'info@taxareus.com',
  PHONE: '+92 332-7772354',
  ADDRESS: 'Flat 903, Green Two Residency, Block 2 PECHS, Karachi',
  NTN: '9344224-1',
};

// Pricing Configuration
export const PRICING = {
  FILING_PRICE: 3500,
  CURRENCY: 'PKR',
  CURRENCY_SYMBOL: '₨',
};

// Services Configuration
export const SERVICES = [
  {
    id: 1,
    icon: '👤',
    title: 'Personal Tax Filing',
    description: 'File your personal income tax return with ease. Our experts handle all the documentation.',
  },
  {
    id: 2,
    icon: '📋',
    title: 'Tax Registrations',
    description: 'Get your NTN and CNIC registrations completed quickly with proper FBR compliance.',
  },
  {
    id: 3,
    icon: '💼',
    title: 'Business Representation',
    description: 'Professional tax representation for your business with complete filing support.',
  },
  {
    id: 4,
    icon: '📄',
    title: 'NTN Registration',
    description: 'Complete NTN registration services for individuals and businesses with instant approval.',
  },
  {
    id: 5,
    icon: '💰',
    title: 'Tax Refunds',
    description: 'Maximize your tax refunds with our expert analysis and strategic filing approach.',
  },
  {
    id: 6,
    icon: '🛡️',
    title: 'Audit Support',
    description: 'Complete audit support and representation with FBR and tax authorities.',
  },
];

// Trust Features
export const TRUST_FEATURES = [
  {
    icon: '⚡',
    title: 'Unmatched Speed',
    description: 'Get your returns filed in just 6 minutes',
  },
  {
    icon: '✓',
    title: '100% Accuracy',
    description: 'Our experts ensure error-free filing',
  },
  {
    icon: '💬',
    title: 'Expert Support',
    description: 'Chat with tax advisors anytime',
  },
  {
    icon: '🔐',
    title: 'Data Security',
    description: 'Bank-level encryption for your data',
  },
];

// Pricing Features
export const PRICING_FEATURES = [
  'Individual Income Tax Return',
  'Wealth Statement Preparation',
  'ITR/FBR Tax Refund Analysis',
  '180 Days ITR Management',
  'Dedicated Tax Consultant',
];

// Tax Years
export const TAX_YEARS = [
  '2025-2026',
  '2024-2025',
  '2023-2024',
];

// Navigation Links
export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'App', href: '#app' },
  { label: 'Contact', href: '#contact' },
];

// Social Links
export const SOCIAL_LINKS = [
  { platform: 'Facebook', url: 'https://facebook.com/taxareus' },
  { platform: 'Twitter', url: 'https://twitter.com/taxareus' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/taxareus' },
  { platform: 'Instagram', url: 'https://instagram.com/taxareus' },
];

// Newsletter Messages
export const NEWSLETTER_MESSAGES = {
  SUCCESS: '✓ Subscribed successfully!',
  ERROR: '✗ Please enter a valid email',
};

// Animations Duration
export const ANIMATIONS = {
  FAST: '0.2s',
  SMOOTH: '0.3s',
  SLOW: '0.5s',
};

export default {
  TAX_SLABS,
  COLORS,
  CONTACT_INFO,
  PRICING,
  SERVICES,
  TRUST_FEATURES,
  PRICING_FEATURES,
  TAX_YEARS,
  NAV_LINKS,
  SOCIAL_LINKS,
  NEWSLETTER_MESSAGES,
  ANIMATIONS,
};
