import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      role: 'Business Owner',
      text: 'Filing taxes used to be a nightmare. Taxareus made it so simple and I got a refund I didn\'t expect!',
      rating: 5
    },
    {
      id: 2,
      name: 'Fatima Khan',
      role: 'Freelancer',
      text: 'Amazing support and super fast filing. Best decision I made for my tax filing this year.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ali Raza',
      role: 'Software Engineer',
      text: 'The interface is intuitive and the team really knows what they\'re doing. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading">Join thousands of satisfied customers</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
