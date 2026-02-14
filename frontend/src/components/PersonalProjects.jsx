import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { personalProjects } from '../data/portfolioData';
import './PersonalProjects.css';

const PersonalProjects = () => {
  return (
    <section id="projects" className="personal-projects">
      <h2 className="section-title">Personal Projects</h2>
      <p className="section-subtitle">Things I've built</p>

      <div className="projects-grid">
        {personalProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="project-features">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalProjects;
