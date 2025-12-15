import React from 'react';
import './committeeCard.css';

interface CommitteeCardProps {
  name: string;
  designation: string;
  organisation: string;
}

const CommitteeCard: React.FC<CommitteeCardProps> = ({ name, designation, organisation }) => {
  return (
    <div className="committee-card">
      <div className="committee-card-body">
        <h2 className="committee-card-name">{name}</h2>
        <p className="committee-card-designation" dangerouslySetInnerHTML={{ __html: designation }}></p>
        <p className="committee-card-organisation">{organisation}</p>
      </div>
      <div className="committee-card-footer">
        <div className="committee-card-decorative-line"></div>
      </div>
    </div>
  );
};

export default CommitteeCard;
