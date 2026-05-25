import React, { useState } from 'react';
import './TaxCalculator.css';

const TaxCalculator = () => {
  const [grossIncome, setGrossIncome] = useState(297107);
  const [year, setYear] = useState('2025-2026');

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setGrossIncome(value === '' ? 0 : Number.parseInt(value));
  };

  const handleSliderChange = (e) => {
    setGrossIncome(Number.parseInt(e.target.value));
  };

  return (
    <section className="calculator-section" id="calculator">
      <div className="container">
        <div className="calculator-wrapper">
          <h2 className="calculator-title">Income Tax Calculator Pakistan</h2>
          <p className="calculator-subtitle">Calculate your income tax in Pakistan with our easy-to-use calculator.</p>

          <div className="calculator-form">
            {/* Input Field */}
            <div className="form-group">
              <label className="form-label">ENTER GROSS INCOME <span>(Monthly)</span></label>
              <input
                type="text"
                className="form-input"
                value={grossIncome.toLocaleString()}
                onChange={handleInputChange}
                placeholder="0"
              />
            </div>

            {/* Year Selector */}
            <div className="form-group">
              <label className="form-label">YEAR</label>
              <select
                className="form-input form-select"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="2025-2026">2025 - 2026</option>
                <option value="2024-2025">2024 - 2025</option>
                <option value="2023-2024">2023 - 2024</option>
              </select>
            </div>
          </div>

          {/* Slider */}
          <div className="slider-wrapper">
            <input
              type="range"
              className="range-slider"
              min="0"
              max="5000000"
              step="10000"
              value={grossIncome}
              onChange={handleSliderChange}
            />
            <div className="slider-labels">
              <span className="slider-min">Rs. 0</span>
              <span className="slider-max">Rs. 1,000,000+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;
