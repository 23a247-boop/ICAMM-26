import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'abouttheclg',
        'aboutthedept', 
        'aboutthecon',
        'committee',
        'speakers',
        'domain',
        'dates',
        'details',
        'registration'
      ];

      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Check if we're at the very top
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Find the current section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isAboutActive = ['abouttheclg', 'aboutthedept', 'aboutthecon'].includes(activeSection);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="footer-conference">ICAMM'26</span>
            <span className="footer-institution">PSG College of Technology</span>
          </div>
          <div className="footer-links">
            <a 
              onClick={() => scrollToSection('home')} 
              className={`footer-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('abouttheclg')} 
              className={`footer-link ${isAboutActive ? 'active' : ''}`}
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('committee')} 
              className={`footer-link ${activeSection === 'committee' ? 'active' : ''}`}
            >
              Committee
            </a>
            <a 
              onClick={() => scrollToSection('speakers')} 
              className={`footer-link ${activeSection === 'speakers' ? 'active' : ''}`}
            >
              Speakers
            </a>
            <a 
              onClick={() => scrollToSection('domain')} 
              className={`footer-link ${activeSection === 'domain' ? 'active' : ''}`}
            >
              Domain
            </a>
            <a 
              onClick={() => scrollToSection('dates')} 
              className={`footer-link ${activeSection === 'dates' ? 'active' : ''}`}
            >
              Dates
            </a>
            <a 
              onClick={() => scrollToSection('details')} 
              className={`footer-link ${activeSection === 'details' ? 'active' : ''}`}
            >
              For Authors
            </a>
            <a 
              onClick={() => scrollToSection('registration')} 
              className={`footer-link ${activeSection === 'registration' ? 'active' : ''}`}
            >
              Registration
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ICAMM'26. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;