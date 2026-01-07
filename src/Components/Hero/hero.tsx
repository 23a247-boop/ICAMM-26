import { } from 'react';
import './hero.css';
import video1 from '../../Assets/video1.mp4';
import Countdown from './Countdown';
import logo from '../../Assets/logo (3).png';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Main Content Section with Video Background */}
      <div className="hero-main">
        <div className="hero-background">
          <video
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video1} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          {/* Countdown visible on all devices */}
          <div className="countdown-section">
            <Countdown />
          </div>

          <div className="conference-info">
            <div className="main-logo-container">
              <img src={logo} alt="ICAMM Logo" className="main-logo" />
            </div>

            <h1 className="conference-title">
              7<sup className="uppcase">th</sup> INTERNATIONAL CONFERENCE ON
            </h1>
            <h2 className="conference-theme">APPLIED MATHEMATICAL MODELS</h2>
            <p className="conference-dates">July 8 - 10, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
