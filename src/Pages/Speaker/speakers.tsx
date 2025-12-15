import React from 'react';
import ProfileCard from '../Comitte/profilecard';
import './speakers.css';
import * as images from '../../images';


interface Speaker {
  id: number;
  photo: string;
  name: string;
  designation: string;
  organisation: string;
  link: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    photo: images.sujatha,
    name: 'Padma Shri. Dr Sujatha Ramadorai',
    designation: 'Mathematics Department',
    organisation: 'University of British Columbia, Canada',
    link: 'https://www.linkedin.com/in/sujatha-ramadorai-6340a625/'
  },
  {
    id: 2,
    photo: images.apoorva,
    name: 'Dr Apoorva khare',
    designation: 'Associate Professor, Department of Mathematics',
    organisation: 'Indian Institute of Science, Bengaluru',
    link: 'https://math.iisc.ac.in//~khare/'
  },
  {
    id: 3,
    photo: images.asadis,
    name: 'Dr Asadi Srinivasulu',
    designation: 'IT Professor',
    organisation: 'University of Newcastle, Australia',
    link: 'https://www.linkedin.com/in/dr-asadi-srinivasulu-48922959/?originalSubdomain=au'
  },
  {
    id: 4,
    photo: images.bhakthimanna,
    name: 'Prof Bhakti Bhusan Manna',
    designation: 'Department of Mathematics',
    organisation: 'Indian Institute of Technology, Hyderabad',
    link: 'https://iith.ac.in/math/bbmanna/'
  },
  {
    id: 5,
    photo: images.bhargav,
    name: 'Prof K. Bhargav Kumar ',
    designation: 'Department of Mathematics',
    organisation: 'Birla Institute of Technology & Science - Pilani, Hyderabad',
    link: 'https://www.bits-pilani.ac.in/hyderabad/bhargav-kumar/'
  },
  {
    id: 6,
    photo: images.john,
    name: 'Dr John Rozario Jegaraj',
    designation: 'Technology Director & Senior Scientist (G)',
    organisation: 'DRDO, Hyderabad',
    link: 'https://scholar.google.com/citations?user=2HsLKesAAAAJ&hl=en'
  },
  {
    id: 7,
    photo: images.winston,
    name: 'Dr Joseph Winston',
    designation: 'Scientist',
    organisation: 'IGCAR, India',
    link: 'https://in.linkedin.com/in/sjwinston'
  },
   {
    id: 8,
    photo: images.kavikumar,
    name: 'Dr Kavikumar Jacob',
    designation: 'Department of Mathematics and Statistics',
    organisation: 'Universiti Tun Hussein Onn Malaysia',
    link: 'https://www.linkedin.com/in/kavikumar-jacob-82141048/'
  },
  {
    id: 9,
    photo: images.oscar,
    name: 'Prof. Oscar Castillo',
    designation: 'Professor of Computer Science',
    organisation: 'Tijuana Institute of Technology, Tijuana, Mexico',
    link: 'https://scholar.google.com/citations?user=fF1nviQAAAAJ&hl=en'
  },
  {
    id: 10,
    photo: images.rajeshkumar,
    name: 'Prof. Rajesh Kumar',
    designation: 'Dept. of Electrical Engg',
    organisation: 'MNIT Jaipur and Dept. of Health Science, Univ. of Johannesburg, South Africa',
    link: 'https://www.linkedin.com/in/drrajeshkumar/?originalSubdomain=in'
  },
  {
    id: 11,
    photo: images.selvanathan,
    name: 'Dr Selvanathan Sivalingam',
    designation: 'Technology Leader – Digitalization',
    organisation: 'Elkem ASA, Norway',
    link: 'https://www.linkedin.com/in/selvanathan-sivalingam-53121923/?originalSubdomain=no'
  },
  {
    id: 12,
    photo: images.sushmithap,
    name: 'Dr. Sushmitha. P',
    designation: 'Department of Mathematics',
    organisation: 'Indian Institute of Technology, Patna',
    link: 'https://www.linkedin.com/in/sushmitha-p-852772216/?originalSubdomain=in'
  }
];

const Speakers: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="speakers-container">
        <div className="speakers-header">
          <h1 className="speakers-title">PLENARY SPEAKERS</h1>
          <p className="speakers-subtitle">Meet our distinguished plenary speakers who will share their expertise</p>
        </div>
      
      <div className="speakers-grid">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="speaker-card-wrapper">
            <ProfileCard
              photo={speaker.photo}
              name={speaker.name}
              designation={speaker.designation}
              organisation={speaker.organisation}
              knowMoreLink={speaker.link}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Speakers;