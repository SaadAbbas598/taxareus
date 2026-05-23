import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import WhyTrust from './components/WhyTrust';
import Pricing from './components/Pricing';
import MobileApp from './components/MobileApp';
import ExpandableTaxCalculator from './components/ExpandableTaxCalculator';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
        <ExpandableTaxCalculator />
        <Services />
        <WhyTrust />
        <Pricing />
        <MobileApp />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
