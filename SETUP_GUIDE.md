# Complete Setup Guide - MERN Portfolio

## 🎯 Current Status

✅ **Completed:**
- Backend structure (server, models, controllers, routes)
- Frontend structure (package.json, App.js, index files)
- Navbar component
- Hero component  
- ParticlesBackground component
- Portfolio data configuration
- Theme system (dark/light mode)

## 📝 Remaining Components to Create

You need to create the following component files in `frontend/src/components/`:

### 1. About Component

**File: `About.jsx`**
```jsx
import React from 'react';
import { personalInfo, experience } from '../data/portfolioData';
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
```

**File: `About.css`**
```css
.about {
  background: var(--bg-secondary);
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-intro,
.about-description,
.about-goal {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about-intro {
  font-weight: 500;
  color: var(--text-primary);
}

.about-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-label {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  font-weight: 500;
}

.info-value {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 600;
}
```

### 2. Skills Component

**File: `Skills.jsx`**
```jsx
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiJira, SiApachemaven, SiJenkins } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { skills } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase,
  SiExpress, SiMongodb, FaGitAlt, FaGithub, VscCode,
  SiPostman, SiJira, SiApachemaven, SiJenkins
};

const Skills = () => {
  const getIcon = (iconName) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Tools</h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="skills-container">
        <div className="skills-category">
          <h3 className="category-title">Technical Skills</h3>
          <div className="skills-grid">
            {skills.technical.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{getIcon(skill.icon)}</div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {skills.tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">{getIcon(tool.icon)}</div>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

**File: `Skills.css`**
```css
.skills {
  background: var(--bg-primary);
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.skills-category {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.category-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-color);
  box-shadow: var(--shadow-md);
}

.skill-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 4px;
  transition: width 1s ease;
}

.skill-level {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  font-weight: 500;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.tool-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tool-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-color);
  box-shadow: var(--shadow-md);
}

.tool-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
}

.tool-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .tools-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
```

### 3. Experience Component

**File: `Experience.jsx`**
```jsx
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
```

**File: `Experience.css`**
```css
.experience {
  background: var(--bg-secondary);
}

.experience-timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.experience-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.experience-item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 60px;
  bottom: -3rem;
  width: 2px;
  background: var(--border-color);
}

.experience-icon {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: var(--shadow-md);
  position: relative;
  z-index: 2;
}

.experience-content {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.experience-content:hover {
  transform: translateX(8px);
  border-color: var(--accent-color);
  box-shadow: var(--shadow-md);
}

.experience-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.experience-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.experience-company,
.experience-duration {
  font-size: 1rem;
  color: var(--text-secondary);
}

.experience-company {
  font-weight: 500;
}

.experience-description {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.experience-description li {
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
}

.experience-description li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .experience-item {
    grid-template-columns: 50px 1fr;
    gap: 1rem;
  }

  .experience-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }

  .experience-item:not(:last-child)::before {
    left: 25px;
  }

  .experience-content {
    padding: 1.5rem;
  }
}
```

## 🔄 Next Steps

1. Create all the component files listed above
2. Create the remaining components (PersonalProjects, CampusProjectHub, Testimonials, Contact, Footer)
3. Add your profile image to `frontend/public/assets/profile.png`
4. Add your resume PDF to `frontend/public/assets/resume.pdf`
5. Add project images to `frontend/public/assets/projects/`

## 📦 Installation Commands

```bash
# Backend
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm start

# Frontend
cd frontend
npm install
cp .env.example .env
# Edit .env with backend URL
npm start
```

## 🎨 Customization

All personal data is in `frontend/src/data/portfolioData.js` - edit this file to update:
- Personal information
- Skills
- Projects
- Social links
- About section

## 📱 Assets Needed

Place these files in `frontend/public/assets/`:
- `profile.png` - Your profile photo (already provided)
- `resume.pdf` - Your resume PDF (already provided)
- `projects/ticket-booking.png` - Screenshot of ticket booking project
- `projects/portfolio.png` - Screenshot of portfolio project
- `projects/campus-hub.png` - Screenshot of Campus Project Hub

---

**Continue creating the remaining components in the next message!**
