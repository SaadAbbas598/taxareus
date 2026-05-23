import React, { useState, useEffect, useCallback } from 'react';
import './TaxCalculator.css';

const taxSlabs = [
  { from: 0, to: 600000, rate: 0 },
  { from: 600001, to: 1200000, rate: 2.5 },
  { from: 1200001, to: 2400000, rate: 12.5 },
  { from: 2400001, to: 3600000, rate: 20 },
  { from: 3600001, to: 6000000, rate: 25 },
  { from: 6000001, to: 12000000, rate: 32.5 },
  { from: 12000001, to: Infinity, rate: 35 },
];

const TaxCalculator = () => {
  const [grossIncome, setGrossIncome] = useState(297107);
  const [year, setYear] = useState('2025-2026');
  const [results, setResults] = useState({});

  const calculateTax = useCallback((income) => {
    let tax = 0;
    let details = [];

    for (let slab of taxSlabs) {
      if (income > slab.from) {
        const taxableInThisSlab = Math.min(income, slab.to) - slab.from;
        const taxInThisSlab = (taxableInThisSlab * slab.rate) / 100;
        tax += taxInThisSlab;
        
        if (taxableInThisSlab > 0) {
          details.push({
            range: `${slab.from.toLocaleString()} - ${slab.to === Infinity ? '∞' : slab.to.toLocaleString()}`,
            rate: slab.rate,
            amount: taxInThisSlab
          });
        }
      }
    }

    const annualTax = tax * 12;
    const monthlyTax = tax;
    const monthlyNetIncome = (income - monthlyTax);
    const annualGrossIncome = income * 12;

    setResults({
      monthlyTax: monthlyTax.toFixed(2),
      monthlyNetIncome: monthlyNetIncome.toFixed(2),
      annualTax: annualTax.toFixed(2),
      annualGrossIncome: annualGrossIncome.toFixed(2),
      details: details
    });
  }, []);

  useEffect(() => {
    calculateTax(grossIncome);
  }, [grossIncome, year, calculateTax]);

  const handleSliderChange = (e) => {
    setGrossIncome(parseInt(e.target.value));
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value === '') {
      setGrossIncome(0);
    } else {
      setGrossIncome(parseInt(value));
    }
  };

  const formatCurrency = (value) => {
    return parseFloat(value).toLocaleString('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  return (
    <section className="calculator-section" id="calculator">
      <div className="container">
        <h2 className="section-heading">Instant Income Tax Calculator</h2>
        <p className="section-subheading">
          Calculate your liability and plan your finances in just a few clicks with our easy-to-use tool
        </p>

        <div className="calculator-grid">
          {/* Left Section - Inputs and Results */}
          <div className="calculator-left">
            <div className="input-group">
              <label className="input-label">Enter your gross monthly income</label>
              <div className="input-wrapper">
                <span className="currency-symbol">Rs.</span>
                <input
                  type="text"
                  className="input-field currency-input"
                  value={grossIncome.toLocaleString()}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Tax Year</label>
              <select
                className="input-field"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="2025-2026">2025 - 2026</option>
                <option value="2024-2025">2024 - 2025</option>
                <option value="2023-2024">2023 - 2024</option>
              </select>
            </div>

            <div className="slider-group">
              <label className="input-label">Adjust Income</label>
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
                <span>Rs. 0</span>
                <span>Rs. 50 Lakhs</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="results-grid">
              <div className="result-card">
                <div className="result-label">Monthly Tax</div>
                <div className="result-value">{formatCurrency(results.monthlyTax || 0)}</div>
              </div>
              <div className="result-card">
                <div className="result-label">Monthly Net Income</div>
                <div className="result-value">{formatCurrency(results.monthlyNetIncome || 0)}</div>
              </div>
              <div className="result-card">
                <div className="result-label">Annual Tax</div>
                <div className="result-value">{formatCurrency(results.annualTax || 0)}</div>
              </div>
              <div className="result-card">
                <div className="result-label">Annual Gross Income</div>
                <div className="result-value">{formatCurrency(results.annualGrossIncome || 0)}</div>
              </div>
            </div>

            <div className="tax-summary">
              <div className="summary-icon">📊</div>
              <div>
                <p className="summary-label">Tax Summary</p>
                <p className="summary-text">
                  Based on FBR tax slabs for the year {year}. Your effective tax rate is calculated and updated in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Tax Slabs */}
          <div className="calculator-right">
            <h3 className="slab-heading">Income Tax Calculator Pakistan</h3>
            <p className="slab-subheading">Tax slab rates visualization</p>

            <div className="tax-slabs">
              {taxSlabs.map((slab, index) => (
                <div key={index} className="tax-slab-item">
                  <div className="slab-label">
                    <span className="slab-range">
                      Rs. {slab.from.toLocaleString()} - {slab.to === Infinity ? '∞' : ('Rs. ' + slab.to.toLocaleString())}
                    </span>
                    <span className="slab-rate">{slab.rate}%</span>
                  </div>
                  <div className="slab-bar-container">
                    <div
                      className="slab-bar"
                      style={{
                        width: `${((slab.rate + 10) / 45) * 100}%`,
                        backgroundColor: getShabColor(index)
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Breakdown */}
            {results.details && results.details.length > 0 && (
              <div className="breakdown-section">
                <h4 className="breakdown-heading">Your Tax Breakdown</h4>
                <div className="breakdown-items">
                  {results.details.map((detail, idx) => (
                    <div key={idx} className="breakdown-item">
                      <span className="breakdown-label">
                        {detail.rate}% on {detail.range}
                      </span>
                      <span className="breakdown-value">
                        {formatCurrency(detail.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const getShabColor = (index) => {
  const colors = [
    '#A78BFA', // Light purple
    '#9F7AEA', // Medium purple
    '#805AD5', // Darker purple
    '#6B46C1', // Dark purple
    '#553399', // Darker
    '#4A3880', // Very dark
    '#3A2A66'  // Darkest
  ];
  return colors[index] || '#4A4AFF';
};

export default TaxCalculator;
