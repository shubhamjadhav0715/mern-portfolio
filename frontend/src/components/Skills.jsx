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
