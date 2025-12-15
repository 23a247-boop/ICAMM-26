import { useState, useEffect } from 'react';
import './Countdown.css';

interface CountdownProps {
  className?: string;
}

const Countdown: React.FC<CountdownProps> = ({ className = '' }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-06-10T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: Record<string, number> = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`countdown-wrapper ${className}`}>
      <div className="countdown">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div key={unit} className="countdown-item">
            <span className="countdown-value">{timeLeft[unit] || 0}</span>
            <span className="countdown-label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
