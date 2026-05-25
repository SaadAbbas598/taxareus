import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiCheck, FiX } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email?.includes('@')) {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus(''), 3000);
    } else {
      setSubscriptionStatus('error');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* Footer Top Grid */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-logo-icon">T</div>
              <span>Taxareus</span>
            </div>
            <p className="footer-description">
              Professional tax filing services in Pakistan with guaranteed accuracy and maximum refunds.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#calculator">Calculator</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#app">Mobile App</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-item">
              <FiMail size={20} />
              <a href="mailto:info@taxareus.com">info@taxareus.com</a>
            </div>
            <div className="contact-item">
              <FiPhone size={20} />
              <a href="tel:+923327772354">+92 332-7772354</a>
            </div>
            <div className="contact-item">
              <FiMapPin size={20} />
              <p>Flat 903, Green Two Residency<br />Block 2 PECHS, Karachi</p>
            </div>
            <div className="contact-item">
              <span>NTN:</span>
              <p>9344224-1</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to get updates on tax news and filing tips.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
              {subscriptionStatus === 'success' && (
                <p className="success-message"><FiCheck size={18} /> Subscribed successfully!</p>
              )}
              {subscriptionStatus === 'error' && (
                <p className="error-message"><FiX size={18} /> Please enter a valid email</p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} Taxareus. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="/terms">Terms of Service</a>
            <span className="divider">•</span>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
