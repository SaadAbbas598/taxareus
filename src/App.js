import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TaxCalculator from './components/TaxCalculator';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import WhyTrust from './components/WhyTrust';
import ExpandableTaxCalculator from './components/ExpandableTaxCalculator';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactWidget from './components/ContactWidget';

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
    <div className="App">
      <Navigation isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <TaxCalculator />
        <HowItWorks />
        <Services />
        <WhyTrust />
        <ExpandableTaxCalculator />
        <Pricing />
        <Testimonials />
        <FAQ />
        <MobileApp />
      </main>
      <Footer />
      <ScrollToTop />
      <ContactWidget />
    </div>
  );
}

export default App;
