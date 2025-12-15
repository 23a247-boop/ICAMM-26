import React from 'react';
import './profilecardSimple.css';

interface ProfileCardSimpleProps {
  photo?: string;
  name: string;
  designation: string;
  organisation: string;
  knowMoreLink?: string;
  position?: string;
  showPhoto?: boolean;
}

const ProfileCardSimple: React.FC<ProfileCardSimpleProps> = ({ photo, name, designation, organisation, knowMoreLink, position, showPhoto = true }) => {
  const getInitials = (fullName: string) => {
    if (!fullName) return '';
    const parts = fullName.trim().split(' ');
    const initials = parts.slice(0, 2).map(p => p.charAt(0).toUpperCase()).join('');
    return initials;
  };
  return (
    <div className={`profile-card-simple ${showPhoto === false ? 'no-photo-section' : ''}`}>
      {position && (
        <div className="profile-position-header">{position}</div>
      )}
      {showPhoto !== false && (
        <div className="profile-photo-simple-container">
          {photo ? (
            <img src={photo} alt={name} className="profile-photo-simple" />
          ) : (
            <div className="profile-no-photo" aria-hidden>
              {getInitials(name)}
            </div>
          )}
        </div>
      )}
      <div className="profile-info-simple">
        <h2 className="profile-name-simple">{name}</h2>
        <p className="profile-designation-simple">
          {designation.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < designation.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        <p className="profile-organisation-simple">{organisation}</p>
        {knowMoreLink && (
          <a
            href={knowMoreLink}
            className="know-more-btn-simple"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know More
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCardSimple;
