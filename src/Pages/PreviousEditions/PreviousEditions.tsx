import React, { useState, useEffect } from 'react';
import './PreviousEditions.css';

const PreviousEditions: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const editions = [
    {
      year: '2025',
      title: 'ICAMM 2025',
      image: '/src/Assets/icamm2025.jpg' // You'll need to add actual images
    },
    {
      year: '2023',
      title: 'ICAMM 2023',
      image: '/src/Assets/icamm2023.jpg'
    },
    {
      year: '2021',
      title: 'ICAMM 2021',
      image: '/src/Assets/icamm2021.jpg'
    },
    {
      year: '2018',
      title: 'ICAMM 2018',
      image: '/src/Assets/icamm2018.jpg'
    },
    {
      year: '2016',
      title: 'ICAMM 2016',
      image: '/src/Assets/icamm2016.jpg'
    },
    {
      year: '2014',
      title: 'ICAMM 2014',
      image: '/src/Assets/icamm2014.jpg'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % editions.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [editions.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % editions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + editions.length) % editions.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="previous-editions-container">
      <div className="previous-editions-content">
        <div className="previous-editions-header">
          <h1 className="previous-editions-title">
            <span className="title-icon">📅</span>
            Previous Editions
          </h1>
          <p className="previous-editions-subtitle">
            A journey through the years of ICAMM conferences
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <button className="carousel-btn prev-btn" onClick={prevSlide}>
              <span>‹</span>
            </button>
            
            <div className="carousel-content">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {editions.map((edition, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="edition-card">
                      <div className="edition-image-container">
                        <img 
                          src={edition.image} 
                          alt={`${edition.title} Event Photo`}
                          className="edition-image"
                          onError={() => {
                            // Fallback to a placeholder if image doesn't exist
                            //(e.target as HTMLImageElement).src = `https://via.placeholder.com/800x600/f3f4f6/374151?text=${edition.title}`;
                          }}
                        />
                        <div className="edition-overlay">
                          <div className="edition-year">{edition.year}</div>
                        </div>
                      </div>
                      <div className="edition-info">
                        <h3 className="edition-title">{edition.title}</h3>
    
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-btn next-btn" onClick={nextSlide}>
              <span>›</span>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {editions.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Edition Stats */}
        <div className="editions-stats">
          <div className="stat-item">
            <div className="stat-number">6</div>
            <div className="stat-label">Successful Editions</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">750+</div>
            <div className="stat-label">Participants</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Research Papers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEditions;
