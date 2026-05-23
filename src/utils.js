// Tax Calculation Utilities
export const calculateTax = (monthlyIncome, taxSlabs) => {
  let tax = 0;
  let details = [];

  for (let slab of taxSlabs) {
    if (monthlyIncome > slab.from) {
      const taxableInThisSlab = Math.min(monthlyIncome, slab.to) - slab.from;
      const taxInThisSlab = (taxableInThisSlab * slab.rate) / 100;
      tax += taxInThisSlab;

      if (taxableInThisSlab > 0) {
        details.push({
          range: `${slab.from.toLocaleString()} - ${slab.to === Infinity ? '∞' : slab.to.toLocaleString()}`,
          rate: slab.rate,
          amount: taxInThisSlab,
        });
      }
    }
  }

  const monthlyTax = tax;
  const monthlyNetIncome = monthlyIncome - monthlyTax;
  const annualTax = tax * 12;
  const annualGrossIncome = monthlyIncome * 12;

  return {
    monthlyTax: monthlyTax.toFixed(2),
    monthlyNetIncome: monthlyNetIncome.toFixed(2),
    annualTax: annualTax.toFixed(2),
    annualGrossIncome: annualGrossIncome.toFixed(2),
    details,
  };
};

// Currency Formatting
export const formatCurrency = (value, currency = 'PKR') => {
  return parseFloat(value).toLocaleString('en-PK', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

// Format number with commas
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number (Pakistan format)
export const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^\+?92[-.\s]?[0-9]{10,12}$/;
  return phoneRegex.test(phone);
};

// Smooth scroll to element
export const smoothScrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Smooth scroll to top
export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Check if element is in viewport
export const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export default {
  calculateTax,
  formatCurrency,
  formatNumber,
  isValidEmail,
  isValidPhoneNumber,
  smoothScrollToElement,
  smoothScrollToTop,
  isElementInViewport,
  debounce,
  throttle,
};
