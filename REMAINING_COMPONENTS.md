# Remaining Components to Create

Create these files in `frontend/src/components/`:

## PersonalProjects Component

**File: `PersonalProjects.jsx`**
```jsx
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
```

**File: `PersonalProjects.css`**
```css
.personal-projects {
  background: var(--bg-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-color);
}

.project-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--bg-tertiary);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  padding: 0.75rem 1.5rem;
  background: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: var(--accent-light);
  color: var(--accent-color);
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-features {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-features li {
  padding-left: 1.25rem;
  position: relative;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.project-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

## CampusProjectHub Component

**File: `CampusProjectHub.jsx`**
```jsx
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
          <div className="hub-image">
            <img src={campusProjectHub.image} alt="Campus Project Hub" />
          </div>
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
```

**File: `CampusProjectHub.css`**
```css
.campus-hub {
  background: var(--bg-secondary);
}

.hub-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.hub-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hub-image {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--accent-color);
  box-shadow: var(--shadow-lg);
}

.hub-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hub-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hub-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.hub-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.hub-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  font-size: 2rem;
  color: var(--accent-color);
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-tertiary);
}

.hub-tech h4 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.hub-projects {
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.projects-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.hub-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.hub-project-card {
  padding: 1.5rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.hub-project-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-color);
}

.hub-project-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.hub-project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.hub-project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.mini-tech-tag {
  padding: 0.2rem 0.5rem;
  background: var(--accent-light);
  color: var(--accent-color);
  border-radius: 4px;
  font-size: 0.75rem;
}

.hub-features {
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.features-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.features-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.features-list li {
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 968px) {
  .hub-hero {
    grid-template-columns: 1fr;
  }

  .hub-stats {
    grid-template-columns: 1fr;
  }

  .hub-projects-grid {
    grid-template-columns: 1fr;
  }
}
```

## Contact & Footer Components

Create `Contact.jsx`, `Contact.css`, `Testimonials.jsx`, `Testimonials.css`, `Footer.jsx`, and `Footer.css` following similar patterns.

See the full code in the repository or ask me to create specific components!
