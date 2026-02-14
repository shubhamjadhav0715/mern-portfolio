import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know me better</p>

      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">{personalInfo.about.intro}</p>
          <p className="about-description">{personalInfo.about.description}</p>
          <p className="about-goal">{personalInfo.about.goal}</p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">{personalInfo.location}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{personalInfo.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">{personalInfo.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
