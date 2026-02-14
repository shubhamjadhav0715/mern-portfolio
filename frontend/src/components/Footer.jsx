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
