import { useEffect, useState } from 'react';
import './hero.css';
import video1 from '../../Assets/video1.mp4';
import Countdown from './Countdown';
import Logo75 from '../../Assets/75yearsLogo_PSGCollegeofTech.png';
import Logo100 from '../../Assets/100yearsLogo_PsgSonsCharities.png';
import PSGLogo from '../../Assets/PSGlogo.png';
/*import MainLogo from '../../Assets/logo.png';*/
import logo from '../../Assets/logo (3).png';
import inst from '../../Assets/PSG INSTITUTION.png'
const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero">
      {/* Top Header Section with White Background */}
      <div className="hero-header">
        <div className="header-content">
          <div className="header-left-logos">
            <img src={Logo75} alt="75 Years of PSG College of Technology" className="header-logo-75" />
            <img src={PSGLogo} alt="PSG College of Technology" className="header-psg-logo" />
          </div>
          
          <div className="header-center">
            {/* Mobile all logos horizontal */}
            <div className="header-all-logos-mobile">
              <img src={Logo75} alt="75 Years of PSG College of Technology" />
              <img src={inst} alt="PSG Institution" />
              <img src={Logo100} alt="100 Years of PSG Sons Charities" />
              <img src={PSGLogo} alt="PSG Logo" />
            </div>
            <h1 className="header-title" style={{ whiteSpace: 'nowrap', textAlign: 'center', width: '100%' }}>
              PSG COLLEGE OF TECHNOLOGY
            </h1>
              <p className="department-text">Department of Mathematics</p>
              <p className="address-text">Coimbatore – 641004, Tamil Nadu, India</p>
          </div>
          
          <div className="header-right-logos">
            <img src={inst} alt="PSG Institution" className="header-psg-logo" />
            <img src={Logo100} alt="100 Years of PSG Sons Charities" className="header-logo-100" />
          </div>
        </div>
      </div>

      {/* Main Content Section with Video Background */}
      <div className="hero-main">
        
        <div className="hero-background">
          <video className="video-background" autoPlay loop muted playsInline>
            <source src={video1} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">

          {!isMobile && (
            <div className="countdown-section">
              <Countdown />
            </div>
          )}

          <div className="conference-info">
            <div className="main-logo-container">
              <img src={logo} alt="ICAMM Logo" className="main-logo" />
            </div>
            <h1 className="conference-title">7<sup className='uppcase'>th</sup> INTERNATIONAL CONFERENCE ON</h1>
            <h2 className="conference-theme">APPLIED MATHEMATICAL MODELS</h2>
            <p className="conference-dates">July 8 - 10, 2026</p>
          </div>

        </div>

        {/* <div className="sponsors-section">
          <h3 className="sponsors-title">Sponsors</h3>
          <p className="sponsors-text">To be announced</p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
