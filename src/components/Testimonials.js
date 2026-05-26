import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Muhammad Umair Umer',
    text: 'Its a great service to deal with the FBR issues. staff is very cooperative, helpful and responds quickly.',
    avatar: 'MU',
  },
  {
    id: 2,
    name: 'Rizwan Muhammad',
    text: 'I was struggling in tax filing, Taxareus helped me in the process. The team is really professional and competent in their work. Highly recommend.',
    avatar: 'RM',
  },
  {
    id: 3,
    name: 'Mamoon Javaid',
    text: 'My experience have been quite good so far. They do focus on the significance of customer satisfaction.',
    avatar: 'MJ',
    isActive: true,
  },
  {
    id: 4,
    name: 'Sana Malik',
    text: 'Their guidance made FBR compliance feel clear and manageable. The whole process was quick, transparent, and professional.',
    avatar: 'SM',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container testimonials-container">
        <h2 className="testimonials-heading">What people has to say about us</h2>

        <div className="testimonials-showcase">
          <div className="testimonial-visual" aria-hidden="true">
            <div className="testimonial-visual-frame">
              <img src="/assets/hero-image.jpg" alt="" />
            </div>
            <div className="testimonial-desk" />
          </div>

          <div className="testimonial-list-wrap">
            <button className="testimonial-nav testimonial-nav-top" aria-label="Previous testimonial">
              <ChevronUp size={24} strokeWidth={2.4} />
            </button>

            <div className="testimonial-list">
              {testimonials.map((testimonial) => (
                <article key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div className="testimonial-copy">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <p className="testimonial-author">
                      <span className="author-line" />
                      <strong>{testimonial.name}</strong>
                    </p>
                  </div>
                  {testimonial.isActive && <span className="testimonial-dot" aria-hidden="true" />}
                </article>
              ))}
            </div>

            <button className="testimonial-nav testimonial-nav-bottom" aria-label="Next testimonial">
              <ChevronDown size={24} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
