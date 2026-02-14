import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const titles = [
    "MERN Stack Developer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer"
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting fade-in">
              Hi, I'm <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
            </h1>
            
            <div className="hero-title slide-in-left">
              <ReactTyped
                strings={titles}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="typed-text"
              />
            </div>

            <p className="hero-description slide-in-right">
              {personalInfo.about.intro}
            </p>

            <div className="hero-buttons fade-in">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a 
                href={personalInfo.resumeUrl} 
                className="btn btn-outline"
                download
              >
                <FaDownload /> Download Resume
              </a>
            </div>

            <div className="hero-social fade-in">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personalInfo.social.telegram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a 
                href={personalInfo.social.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="hero-image fade-in">
            <div className="image-wrapper">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="profile-image"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
