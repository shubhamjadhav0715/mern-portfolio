import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { sampleTestimonials } from '../data/portfolioData';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(sampleTestimonials);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.get(`${apiUrl}/api/testimonials`);
      
      if (response.data.success && response.data.data.length > 0) {
        setTestimonials(response.data.data);
      }
    } catch (error) {
      console.log('Using sample testimonials');
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, index) => (
      <FaStar key={index} className="star" />
    ));
  };

  if (loading) {
    return (
      <section className="testimonials">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-subtitle">What people say about my work</p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
            <p className="testimonial-message">{testimonial.message}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonial.image ? (
                  <img src={testimonial.image} alt={testimonial.name} />
                ) : (
                  <span>{testimonial.name.charAt(0)}</span>
                )}
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
                {testimonial.company && (
                  <p className="author-company">{testimonial.company}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
