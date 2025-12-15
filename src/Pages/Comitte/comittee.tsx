import { useState } from 'react';
import ProfileCardSimple from './profilecardSimple';
import './committee.css';
import * as images from '../../images';

type Member = {
  photo?: string;
  name: string;
  designation: string;
  organisation: string;
  knowMoreLink?: string;
  position?: string;
  showPhoto?: boolean;
};

type SubCommittee = {
  title: string;
  members: string[];
};

// Main organizing committee
const committeeMembers: Member[] = [
  {
    name: 'Shri L Gopalakrishnan',
    designation: 'Managing Trustee',
    organisation: "PSG & Sons' Charities",
    position: 'CHIEF PATRON',
    showPhoto: false
  },
  {
    name: 'Dr K Prakasan',
    designation: 'Principal',
    organisation: 'PSG College of Technology',
    position: 'PATRON',
    showPhoto: false
  },
  {
    name: 'Dr C Porkodi',
    designation: 'Professor and Head,\nDepartment of Mathematics',
    organisation: 'PSG College of Technology',
    position: 'CONVENOR',
    showPhoto: false
  },
  {
    name: 'Dr R Subalakshmi',
    designation: 'Assistant Professor (Sl. Gr.), \nDepartment of Mathematics',
    organisation: 'PSG College of Technology',
    position: 'ORGANISING SECRETARY',
    showPhoto: false
  },
];

// Advisory committee
const advisoryCommittee: Member[] = [
  {
    photo: images.arumuganathan,
    name: 'Dr R Arumuganathan',
    designation: 'Professor , Department of Mathematics',
    organisation: 'PSG College of Technology',
    showPhoto: false
  },
  {
    photo: images.john,
    name: 'Dr John Rozario Jegaraj',
    designation: 'Technology Director & Senior Scientist (G) ',
    organisation: 'DRDO , India',
    showPhoto: false
  },
  {
    photo: images.pandian,
    name: 'Dr P.S. Pandian',
    designation: 'Scientist, Defence Bioengineering and Electromedical Laboratory',
    organisation: 'DRDO , India',
    showPhoto: false
  },
  {
    photo: images.sankar,
    name: 'Dr CH.N.A.B. Sankar',
    designation: 'Scientist, Research Centre Imarat',
    organisation: 'DRDO , India',
    showPhoto: false
  },
  {
    photo: images.sankar,
    name: 'Dr Joseph Winston',
    designation: 'Scientist',
    organisation: 'IGCAR , India',
    showPhoto: false
  },
];

// Technical committee
const technicalCommittee: Member[] = [
  {
    photo: images.mahesh,
    name: 'Dr Maheshanand',
    designation: 'Professor and Head of the Department of Mathematics',
    organisation: 'IIIT Roorkee',
    showPhoto: false
  },
  {
    photo: images.abhay,
    name: 'Dr Abhay Kumar Singh',
    designation: 'Associate Professor, Department of Mathematics and Computing',
    organisation: 'IIT(ISM), Dhanbad',
    showPhoto: false
  },
  {
    photo: images.rubell,
    name: 'Dr Rubell Marion Lincy George',
    designation: 'Assistant Professor & Head - Department of Computer Science and Engineering',
    organisation: 'IIIT Kottayam',
    showPhoto: false
  },
  {
    photo: images.amalanjosephantony_1,
    name: 'Dr Amalan Joseph Antony A',
    designation: 'Assistant Professor',
    organisation: 'IIITDM Kancheepuram',
    showPhoto: false
  },
  {
    photo: images.drsgkManikandan,
    name: 'Dr Manikandan SGK',
    designation: 'Scientist',
    organisation: 'ISRO, Thiruvananthapuram',
    showPhoto: false
  },
];

// Sub-committees
const subCommittees: SubCommittee[] = [
  {
    title: 'Programme Committee',
    members: [
      'Dr.B.Sridevi (Advisor)',
      'Dr.R.Rajasudha (Convener)',
      'Dr.M.Sumathi',
      'Ms.S.T.Padmalakshmi',
      'Dr.V.Deepa',
    ],
  },
  {
    title: 'Proceedings Committee',
    members: [
      'Dr.T.Vasanthi (Advisor)',
      'Dr.A. Muthulakshmi (Convener)',
      'Dr.C.K.Deena Merit',
      'Dr.D.Kiruthika',
      'Dr.R.Syama',
      'Ms.R.Brindha',
    ],
  },
  {
    title: 'Funding and Finance Committee',
    members: [
      'Dr.M.Haridass (Advisor)',
      'Dr.R.Deena (Convener)',
      'Dr.P.Sathyakala',
      'Dr.Ragi Krishnan',
      'Ms.G.Tamilselvi',
    ],
  },
  {
    title: 'Hall Arrangements Committee',
    members: [
      'Dr.K.Sangavai (Advisor)',
      'Dr.M. Bagyalakshmi (Convener)',
      'Dr.P.Sathyakala',
      'Dr.C.K.Deena Merit',
      'Dr.D.Kiruthika',
      'Dr.R.Syama',
    ],
  },
  {
    title: 'Registration Committee',
    members: [
      'Dr.R. Bindhu (Convener)',
      'Dr.Ragi Krishnan',
      'Dr.V.Deepa',
      'Ms.G.Tamilselvi',
      'Ms.R.Brindha',
    ],
  },
  {
    title: 'Publicity Committee',
    members: [
      'Dr.P.Muthukumar (Advisor)',
      'Ms.M.Radhiga (Convener)',
      'Dr.R.Syama',
      'Dr.K.Anukiruthika',
    ],
  },
  {
    title: 'Hospitality Committee',
    members: [
      'Dr.P.Muthukumar (Advisor)',
      'Dr.J.Narayanasamy (Convener)',
      'Mr.K.Saravanan',
      'Dr.J.Palraj',
      'Dr.K.Anukiruthika',
    ],
  },
];

// Sub-committee panel component
const SubCommitteePanel = ({ title, members }: SubCommittee) => (
  <div className="organising-committee-panel">
    <div className="org-panel-title">{title}</div>
    <ul className="org-committee-members">
      {members.map((member, idx) => (
        <li key={idx}>{member}</li>
      ))}
    </ul>
  </div>
);

// Main component
const Committee = () => {
  const [activeSection, setActiveSection] = useState<string>('organizing');

  const sections = [
    { id: 'organizing', title: 'Organizing Committee' },
    { id: 'advisory', title: 'Advisory Committee' },
    { id: 'technical', title: 'Technical Committee' },
    { id: 'members', title: 'Supporting Committee' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'organizing':
        return (
          <div id='committee-o'>
            <div className="committee-content-header">
              <h2 className="committee-content-title">Organizing Committee</h2>
            </div>
            <div className="organising-committee-grid">
              {committeeMembers.map((member, idx) => (
                <div key={idx} className="committee-section">
                  <ProfileCardSimple
                    photo={member.photo}
                    name={member.name}
                    designation={member.designation}
                    organisation={member.organisation}
                    knowMoreLink={member.knowMoreLink}
                    position={member.position}
                    showPhoto={member.showPhoto}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'advisory':
        return (
          <div id='committee-a'>
            <div className="committee-content-header">
              <h2 className="committee-content-title">Advisory Committee</h2>
            </div>
            <div className="advisory-committee-grid">
              {advisoryCommittee.map((member, idx) => (
                <ProfileCardSimple
                  key={idx}
                  photo={member.photo}
                  name={member.name}
                  designation={member.designation}
                  organisation={member.organisation}
                  knowMoreLink={member.knowMoreLink}
                  showPhoto={member.showPhoto}
                />
              ))}
            </div>
          </div>
        );

      case 'technical':
        return (
          <div id='committee-t'>
            <div className="committee-content-header">
              <h2 className="committee-content-title">Technical Committee</h2>
            </div>
            <div className="technical-committee-grid">
              {technicalCommittee.map((member, idx) => (
                <ProfileCardSimple
                  key={idx}
                  photo={member.photo}
                  name={member.name}
                  designation={member.designation}
                  organisation={member.organisation}
                  knowMoreLink={member.knowMoreLink}
                  showPhoto={member.showPhoto}
                />
              ))}
            </div>
          </div>
        );

      case 'members':
        return (
          <div id='committee-m'>
            <div className="committee-content-header">
              <h2 className="committee-content-title">Supporting Committee</h2>
            </div>
            <div className="organising-committees-grid">
              {subCommittees.map((committee, idx) => (
                <SubCommitteePanel 
                  key={idx}
                  title={committee.title}
                  members={committee.members}
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="committee-page-container">
      <div className="committee-page-content">
        {/* Sidebar Navigation */}
        <aside className="committee-sidebar">
          <div className="sidebar-header">
            <h3>COMMITTEE</h3>
          </div>
          <nav className="sidebar-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`sidebar-nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="committee-main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Committee;