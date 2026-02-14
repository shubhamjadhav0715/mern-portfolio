# Final Components - Contact, Testimonials, Footer

Create these last three components to complete your portfolio:

## Contact Component

**File: `frontend/src/components/Contact.jsx`**
```jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/contact`, formData);
      
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again or email me directly.');
      console.error('Contact form error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Let's work together!</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p className="contact-intro">
            Feel free to reach out to me for any opportunities, collaborations, or just to say hi!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending...' : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
```

**File: `frontend/src/components/Contact.css`**
```css
.contact {
  background: var(--bg-primary);
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.contact-intro {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-top: 0.25rem;
}

.contact-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.contact-item a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: var(--accent-color);
}

.contact-item p {
  color: var(--text-secondary);
  margin: 0;
}

.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form .btn {
  align-self: flex-start;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .contact-form .btn {
    width: 100%;
  }
}
```

## Testimonials Component

**File: `frontend/src/components/Testimonials.jsx`**
```jsx
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
```

**File: `frontend/src/components/Testimonials.css`**
```css
.testimonials {
  background: var(--bg-secondary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-color);
}

.quote-icon {
  font-size: 2rem;
  color: var(--accent-color);
  opacity: 0.3;
}

.testimonial-rating {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #fbbf24;
  font-size: 1rem;
}

.testimonial-message {
  color: var(--text-secondary);
  line-height: 1.7;
  font-style: italic;
  flex: 1;
}

.testimonial-author {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  overflow: hidden;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.author-role,
.author-company {
  font-size: 0.85rem;
  color: var(--text-tertiary);
  margin: 0;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
```

## Footer Component

**File: `frontend/src/components/Footer.jsx`**
```jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Shubham<span>.</span></h3>
          <p className="footer-tagline">
            Building digital experiences with passion and precision
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-social">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={personalInfo.social.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FaTelegram />
            </a>
            <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} {personalInfo.name}. Made with <FaHeart className="heart" /> using MERN Stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
```

**File: `frontend/src/components/Footer.css`**
```css
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 3rem 2rem 1.5rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-logo span {
  color: var(--accent-color);
}

.footer-tagline {
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 300px;
}

.footer-links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent-color);
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.footer-social a:hover {
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
  transform: translateY(-3px);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.footer-bottom p {
  color: var(--text-tertiary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.heart {
  color: #ef4444;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-tagline {
    max-width: 100%;
  }

  .footer-bottom p {
    flex-direction: column;
    gap: 0.25rem;
  }
}
```

---

## ✅ All Components Created!

Your portfolio now has all the necessary components. Next steps:

1. Add your assets (profile image, resume, project screenshots)
2. Test the application locally
3. Deploy to production

Run `npm install` in both frontend and backend, then `npm start` to test!
