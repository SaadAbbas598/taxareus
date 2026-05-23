import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ExpandableTaxCalculator.css';

function formatCurrency(n) {
  return 'Rs ' + Number(n).toLocaleString();
}

function calculateTax(amount) {
  // Simple progressive slabs example for demonstration
  let tax = 0;
  const slabs = [
    { limit: 600000, rate: 0 },
    { limit: 1200000, rate: 0.05 },
    { limit: 2400000, rate: 0.125 },
    { limit: 3600000, rate: 0.2 },
    { limit: 6000000, rate: 0.25 },
    { limit: Infinity, rate: 0.35 },
  ];

  let remaining = amount;
  let lower = 0;
  for (const slab of slabs) {
    const taxable = Math.max(0, Math.min(remaining, slab.limit - lower));
    tax += taxable * slab.rate;
    remaining -= taxable;
    lower = slab.limit;
    if (remaining <= 0) break;
  }

  return Math.round(tax);
}

export default function ExpandableTaxCalculator() {
  const [open, setOpen] = useState(false);
  const [gross, setGross] = useState(600000);
  const [slider, setSlider] = useState(600000);
  const [year, setYear] = useState('2025–2026');

  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (open) {
      // focus first field when opened
      const el = panelRef.current && panelRef.current.querySelector('input, select, button');
      el && el.focus();
    } else {
      toggleRef.current && toggleRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const taxDue = calculateTax(Number(gross || 0));
  const effective = gross > 0 ? Math.round((taxDue / gross) * 10000) / 100 : 0;

  const toggleVariants = {
    closed: { scale: 1, opacity: 1 },
    hidden: { scale: 0.9, opacity: 0, transition: { duration: 0.18 } },
  };

  const panelVariants = {
    hidden: { opacity: 0, maxHeight: 0, y: 12, transition: { duration: 0.28 } },
    visible: { opacity: 1, maxHeight: 920, y: 0, transition: { duration: 0.42, ease: [0.2,0.9,0.2,1] } },
    exit: { opacity: 0, maxHeight: 0, y: 8, transition: { duration: 0.32 } },
  };

  return (
    <div className="expandable-tax-root" aria-live="polite">
      <AnimatePresence>
        {!open && (
          <motion.button
            ref={toggleRef}
            aria-expanded={open}
            aria-controls="expandable-tax-panel"
            className={`expand-toggle`}
            onClick={() => setOpen(true)}
            aria-label="Open Income Tax Calculator"
            initial="closed"
            animate="closed"
            exit="hidden"
            variants={toggleVariants}
          >
            <span className="plus" aria-hidden>+</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            id="expandable-tax-panel"
            ref={panelRef}
            className={`expand-panel`}
            role="region"
            aria-hidden={!open}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={panelVariants}
            style={{ overflow: 'hidden' }}
          >
            <div className="panel-card" role="dialog" aria-label="Income Tax Calculator Pakistan">
              <button className="collapse-btn" aria-label="Close calculator" onClick={() => setOpen(false)}>-</button>

              <header className="panel-header">
                <span className="panel-kicker">Pakistan Tax Estimate</span>
                <h2>Income Tax Calculator Pakistan</h2>
                <p>Calculate your income tax in Pakistan with our easy-to-use calculator.</p>
              </header>

              <div className="panel-body">
                <div className="minimal-row">
                  <label className="field field-grow">
                    <span className="field-label">Gross monthly income</span>
                    <input
                      type="number"
                      min="0"
                      value={gross}
                      onChange={(e) => {
                        const v = Number(e.target.value || 0);
                        setGross(v);
                        setSlider(v);
                      }}
                      aria-label="Gross income"
                    />
                  </label>

                  <label className="field field-year">
                    <span className="field-label">Tax Year</span>
                    <select value={year} onChange={(e) => setYear(e.target.value)} aria-label="Tax year">
                      <option>2025–2026</option>
                      <option>2024–2025</option>
                      <option>2023–2024</option>
                    </select>
                  </label>
                </div>

                <label className="field slider-field">
                  <span className="field-label">Income range</span>
                  <input
                    type="range"
                    min="0"
                    max="20000000"
                    step="10000"
                    value={slider}
                    onChange={(e) => {
                      const v = Number(e.target.value || 0);
                      setSlider(v);
                      setGross(v);
                    }}
                    aria-label="Income range"
                  />
                  <div className="range-value">{formatCurrency(slider)}</div>
                </label>

                <div className="result-strip" aria-label="Estimated tax result">
                  <span className="result-strip-label">Estimated Tax Due</span>
                  <span className="result-strip-value">{formatCurrency(taxDue)}</span>
                  <span className="result-strip-meta">Effective rate {effective}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
