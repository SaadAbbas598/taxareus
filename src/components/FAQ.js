import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to file my taxes?',
      answer: 'Most tax returns can be filed in just 6 minutes! Our streamlined process makes it quick and painless.'
    },
    {
      question: 'Is my data safe with TAX R US?',
      answer: 'Yes, we use bank-level encryption (256-bit SSL) and comply with FBR security standards. Your data is always secure.'
    },
    {
      question: 'What documents do I need to provide?',
      answer: 'You\'ll need your CNIC, income statements, receipts, and any relevant tax documents. Our team will guide you through the process.'
    },
    {
      question: 'Do you help with tax refunds?',
      answer: 'Absolutely! We analyze your return to maximize your refund and track it through FBR until you receive it.'
    },
    {
      question: 'Can I file for previous years?',
      answer: 'Yes, we can help you file returns for previous years. However, late filing may have additional compliance requirements.'
    },
    {
      question: 'What if I need help after filing?',
      answer: 'Our expert support team is available 24/7 to assist with any questions or issues related to your tax filing.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">Get answers to common questions about tax filing</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={24}
                  strokeWidth={2}
                  className={`chevron ${activeIndex === index ? 'rotate' : ''}`}
                />
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
