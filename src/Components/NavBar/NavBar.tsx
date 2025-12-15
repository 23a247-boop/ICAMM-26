import { useState, useEffect } from 'react';
import './NavBar.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
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
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="brand-title" onClick={scrollToTop} style={{ cursor: "pointer" }}>
          <span className="conference-name">ICAMM'26</span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="desktop-menu">
          <a onClick={scrollToTop} className="nav-link">Home</a>
          
          {/* About Dropdown */}
          <div 
            className="dropdown"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              About
              <svg className="dropdown-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {aboutDropdownOpen && (
              <div className="dropdown-menu">
                <a onClick={() => scrollToSection('abouttheclg')} className="dropdown-item">About College</a>
                <a onClick={() => scrollToSection('aboutthedept')} className="dropdown-item">About Department</a>
                <a onClick={() => scrollToSection('aboutthecon')} className="dropdown-item">About Conference</a>
              </div>
            )}
          </div>

          {/* Committee Dropdown */}
          <a onClick={() => scrollToSection('committee')} className="nav-link">Committee</a>
          <a onClick={() => scrollToSection('speakers')} className="nav-link">Speakers</a>
          <a onClick={() => scrollToSection('domain')} className="nav-link">Domain</a>
          <a onClick={() => scrollToSection('dates')} className="nav-link">Dates</a>
          <a onClick={() => scrollToSection('details')} className="nav-link">For Authors</a>
          <a onClick={() => scrollToSection('registration')} className="nav-link">Registration</a>
          <button 
            className="register-btn"
            onClick={() => scrollToSection('registration')}
          >
            Register Now
          </button>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg className="menu-button" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg className="menu-button" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`sidebar-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-menu-links">
          <a onClick={scrollToTop} className='nav-link'>Home</a>
          
          {/* Mobile About Dropdown */}
          <div className="mobile-dropdown">
            <button 
              className="mobile-dropdown-trigger"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              About
              <svg className={`mobile-dropdown-icon ${mobileAboutOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {mobileAboutOpen && (
              <div className="mobile-dropdown-menu">
                <a onClick={() => scrollToSection('abouttheclg')} className="mobile-dropdown-item">About College</a>
                <a onClick={() => scrollToSection('aboutthedept')} className="mobile-dropdown-item">About Department</a>
                <a onClick={() => scrollToSection('aboutthecon')} className="mobile-dropdown-item">About Conference</a>
              </div>
            )}
          </div>

          {/* Mobile Committee Dropdown */}
          <div className="mobile-dropdown">
            <button 
              className="mobile-dropdown-trigger"
              onClick={() => setMobileCommitteeOpen(!mobileCommitteeOpen)}
            >
              Committee
              <svg className={`mobile-dropdown-icon ${mobileCommitteeOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {mobileCommitteeOpen && (
              <div className="mobile-dropdown-menu">
                <a onClick={() => scrollToSection('committee-o')} className="mobile-dropdown-item">Organizing Committee</a>
                <a onClick={() => scrollToSection('committee-a')} className="mobile-dropdown-item">Advisory Committee</a>
                <a onClick={() => scrollToSection('committee-t')} className="mobile-dropdown-item">Technical Committee</a>
                <a onClick={() => scrollToSection('committee-m')} className="mobile-dropdown-item">Organizing Members</a>
              </div>
            )}
          </div>

          <a onClick={() => scrollToSection('speakers')} className="nav-link">Speakers</a>
          <a onClick={() => scrollToSection('domain')} className="nav-link">Domain</a>
          <a onClick={() => scrollToSection('dates')} className="nav-link">Dates</a>
          <a onClick={() => scrollToSection('details')} className="nav-link">For Authors</a>
          <a onClick={() => scrollToSection('registration')} className="nav-link">Registration</a>
          <button 
            className="register-btn mobile-register-btn"
            onClick={() => scrollToSection('registration')}
          >
            Register Now
          </button>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;