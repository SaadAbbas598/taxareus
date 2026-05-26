import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TaxCalculator from './components/TaxCalculator';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import WhyTrust from './components/WhyTrust';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <TaxCalculator />
              <HowItWorks />
              <Services />
              <WhyTrust />
              <Pricing />
              <Testimonials />
              <FAQ />
              <MobileApp />
            </main>
          } />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
