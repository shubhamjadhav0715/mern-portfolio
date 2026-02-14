import React from 'react';
import { FaExternalLinkAlt, FaUsers, FaDownload, FaProjectDiagram } from 'react-icons/fa';
import { campusProjectHub } from '../data/portfolioData';
import './CampusProjectHub.css';

const CampusProjectHub = () => {
  return (
    <section id="campus-hub" className="campus-hub">
      <h2 className="section-title">Campus Project Hub</h2>
      <p className="section-subtitle">{campusProjectHub.tagline}</p>

      <div className="hub-container">
        <div className="hub-hero">
          <div className="hub-content">
            <h3 className="hub-title">{campusProjectHub.title}</h3>
            <p className="hub-description">{campusProjectHub.description}</p>
            
            <div className="hub-stats">
              <div className="stat-item">
                <FaProjectDiagram className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-value">{campusProjectHub.stats.totalProjects}</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
              <div className="stat-item">
                <FaUsers className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-value">{campusProjectHub.stats.happyStudents}</span>
                  <span className="stat-label">Happy Students</span>
                </div>
              </div>
              <div className="stat-item">
                <FaDownload className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-value">{campusProjectHub.stats.downloads}</span>
                  <span className="stat-label">Downloads</span>
                </div>
              </div>
            </div>

            <div className="hub-tech">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {campusProjectHub.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <a href={campusProjectHub.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaExternalLinkAlt /> Visit Campus Project Hub
            </a>
          </div>
        </div>

        <div className="hub-projects">
          <h4 className="projects-title">Featured Projects</h4>
          <div className="hub-projects-grid">
            {campusProjectHub.projects.map((project, index) => (
              <div key={index} className="hub-project-card">
                <h5 className="hub-project-name">{project.name}</h5>
                <p className="hub-project-desc">{project.description}</p>
                <div className="hub-project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="mini-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hub-features">
          <h4 className="features-title">What's Included</h4>
          <ul className="features-list">
            {campusProjectHub.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CampusProjectHub;
