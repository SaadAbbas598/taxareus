import React, { useState, useEffect, useRef } from 'react';
import './TaxCalculator.css';

/* ── Pakistan FBR Tax Slabs 2025-2026 (monthly income → annual) ── */
const TAX_SLABS = {
  '2025-2026': [
    { min: 0,        max: 50000,   rate: 0,    fixed: 0 },
    { min: 50000,    max: 100000,  rate: 0.05, fixed: 0 },
    { min: 100000,   max: 200000,  rate: 0.15, fixed: 2500 },
    { min: 200000,   max: 400000,  rate: 0.25, fixed: 17500 },
    { min: 400000,   max: 600000,  rate: 0.30, fixed: 67500 },
    { min: 600000,   max: Infinity,rate: 0.35, fixed: 127500 },
  ],
  '2024-2025': [
    { min: 0,        max: 50000,   rate: 0,    fixed: 0 },
    { min: 50000,    max: 100000,  rate: 0.05, fixed: 0 },
    { min: 100000,   max: 200000,  rate: 0.15, fixed: 2500 },
    { min: 200000,   max: 400000,  rate: 0.25, fixed: 17500 },
    { min: 400000,   max: 600000,  rate: 0.30, fixed: 67500 },
    { min: 600000,   max: Infinity,rate: 0.35, fixed: 127500 },
  ],
  '2023-2024': [
    { min: 0,        max: 50000,   rate: 0,    fixed: 0 },
    { min: 50000,    max: 100000,  rate: 0.025,fixed: 0 },
    { min: 100000,   max: 200000,  rate: 0.125,fixed: 1250 },
    { min: 200000,   max: 300000,  rate: 0.175,fixed: 13750 },
    { min: 300000,   max: 500000,  rate: 0.225,fixed: 31250 },
    { min: 500000,   max: Infinity,rate: 0.275,fixed: 76250 },
  ],
};

const TIPS = [
  'Always register for NTN before filing; it\'s mandatory.',
  'File your returns on time to avoid penalty surcharges.',
  'Keep all receipts and invoices for potential audits.',
  'Salaried individuals can claim deductions on Zakat paid.',
  'Investing in approved pension funds reduces taxable income.',
];

function calcTax(monthlyIncome, year) {
  const annual = monthlyIncome * 12;
  const slabs = TAX_SLABS[year] || TAX_SLABS['2025-2026'];
  let annualTax = 0;

  for (const slab of slabs) {
    if (annual > slab.min) {
      const taxable = Math.min(annual, slab.max) - slab.min;
      annualTax = slab.fixed + taxable * slab.rate;
      if (annual <= slab.max) break;
    }
  }

  const monthlyTax   = annualTax / 12;
  const salaryAfter  = monthlyIncome - monthlyTax;
  const annualSalary = salaryAfter * 12;
  return { monthlyTax, salaryAfter, annualTax, annualSalary };
}

function fmt(n) {
  return n.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* Animated number counter */
function useCountUp(target, duration = 600) {
  const [display, setDisplay] = useState(target);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    const to   = target;
    if (from === to) return;
    cancelAnimationFrame(rafRef.current);
    startRef.current = null;

    rafRef.current = requestAnimationFrame(function step(ts) {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + (to - from) * ease);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else { fromRef.current = to; setDisplay(to); }
    });
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return display;
}

function StatCard({ label, value }) {
  const animated = useCountUp(value);
  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <span className="stat-value">Rs. {fmt(animated)}</span>
    </div>
  );
}

export default function TaxCalculator() {
  const [grossIncome, setGrossIncome] = useState(0);
  const [inputDisplay, setInputDisplay] = useState('');
  const [year, setYear] = useState('2025-2026');
  const [tipIdx] = useState(() => Math.floor(Math.random() * TIPS.length));

  const MAX = 1000000;
  const hasIncome = grossIncome > 0;
  const { monthlyTax, salaryAfter, annualTax, annualSalary } = calcTax(grossIncome, year);

  const sliderPct = Math.min(grossIncome / MAX, 1) * 100;

  const handleInput = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    if (raw === '') { setInputDisplay(''); setGrossIncome(0); return; }
    const num = parseInt(raw, 10);
    setGrossIncome(num);
    setInputDisplay(num.toLocaleString('en-PK'));
  };

  const handleInputFocus = () => {
    if (grossIncome === 0) setInputDisplay('');
  };

  const handleInputBlur = () => {
    if (grossIncome > 0) setInputDisplay(grossIncome.toLocaleString('en-PK'));
    else setInputDisplay('');
  };

  const handleSlider = (e) => {
    const val = parseInt(e.target.value, 10);
    setGrossIncome(val);
    setInputDisplay(val > 0 ? val.toLocaleString('en-PK') : '');
  };

  return (
    <section className="calculator-section" id="calculator">
      <div className="container">
        <div className="calculator-wrapper">

          {/* Header */}
          <h2 className="calculator-title">Income Tax Calculator Pakistan</h2>
          <p className="calculator-subtitle">
            Calculate your income tax in Pakistan with our easy-to-use calculator.
          </p>

          {/* Inputs */}
          <div className="calculator-form">
            <div className="form-group">
              <label className="form-label">
                ENTER GROSS INCOME <span>(Monthly)</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={inputDisplay}
                onChange={handleInput}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="0"
                inputMode="numeric"
              />
            </div>

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
            <div className="slider-track-container">
              <div
                className="slider-fill"
                style={{ width: `${sliderPct}%` }}
              />
              <input
                type="range"
                className="range-slider"
                min="0"
                max={MAX}
                step="1000"
                value={grossIncome}
                onChange={handleSlider}
              />
            </div>
            <div className="slider-labels">
              <span className="slider-min">Rs. 0</span>
              <span className="slider-max">Rs. 1,000,000+</span>
            </div>
          </div>

          {/* Results — only shown when income > 0 */}
          <div className={`results-area ${hasIncome ? 'results-visible' : ''}`}>
            {/* 4 stat cards */}
            <div className="stats-grid">
              <StatCard label="MONTHLY TAX"     value={monthlyTax}   />
              <StatCard label="SALARY AFTER TAX" value={salaryAfter}  />
              <StatCard label="ANNUAL TAX"       value={annualTax}    />
              <StatCard label="ANNUAL SALARY"    value={annualSalary} />
            </div>

            {/* Summary card */}
            <div className="summary-card">
              <p className="summary-text">
                <span className="summary-icon">📢</span>
                <strong>Tax Summary</strong> — With a monthly income of{' '}
                <strong>Rs. {grossIncome.toLocaleString('en-PK')}</strong> in{' '}
                <span className="pk-flag">🇵🇰</span> Pakistan, you'll pay around{' '}
                <strong>Rs. {fmt(monthlyTax)}</strong> in tax each month. Your net
                take-home is <strong>Rs. {fmt(annualSalary)}</strong> per year, while
                your gross income is <strong>Rs. {(grossIncome * 12).toLocaleString('en-PK')}</strong>.
              </p>
              <p className="summary-tip">
                <span className="summary-icon">📋</span>
                <strong>Did You Know?</strong>{' '}
                <span className="pin">📌</span> {TIPS[tipIdx]}
              </p>
            </div>

            {/* Learn more link */}
            <div className="learn-more-row">
              <a href="#contact" className="learn-more-link">
                Learn how to save more on taxes →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}