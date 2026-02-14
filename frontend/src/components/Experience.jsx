import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My professional journey</p>

      <div className="experience-timeline">
        {experience.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-content">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-meta">
                <span className="experience-company">{exp.company}</span>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
