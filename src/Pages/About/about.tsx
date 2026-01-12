import './about.css';
import CollegeImg from '../../Assets/aboutcollege.jpg';
import DepartmentImg from '../../Assets/Department.png';
import ConferenceImg from '../../Assets/logo.png';
import finalbrochure from '../../Assets/ICAMM BROCHURE Final.pdf';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/* College Section */}
        <div className="about-card college image-left" id='abouttheclg'>
          <div className="about-card-header">
            <div className="about-image-container">
              <img
                src={CollegeImg}
                alt="PSG College of Technology"
                className="about-image"
              />
            </div>
            <div className="about-text-content">
              <div className='title-left'>
              <h2 className="about-heading">About PSG College of Technology</h2>
              {/* <h3 className="about-subheading">PSG College of Technology</h3> */}
              <div className="about-content">
                <p>
                  PSG College of Technology (PSG CT), established in 1951 by PSG & Sons' Charities, is an ISO 9001:2015 certified autonomous institution affiliated with Anna University, Chennai. This year marks a significant milestone as PSG College of Technology celebrates its Platinum Jubilee, coinciding with the Centenary Year of PSG & Sons' Charities, the founding trust renowned for its contributions to education and industry. PSG CT offers 21 undergraduates and 24 postgraduate programmes across Engineering and Technology, Computer Applications, Management Sciences, and Basic and Advanced Sciences. PSG CT has built a strong network with industries, research organizations, alumni, and entrepreneurs, fostering innovation and collaboration. The institution has received national recognition, ranking second in the ATAL Ranking of Institutions on Innovation Achievements (ARIIA) under the Government and Government-Aided Technical Institutions category by the Ministry of Education, Government of India in 2021, and being awarded the Best Industry-Linked Institution by AICTE-CII in 2012. Further, during India's G20 Presidency in 2022, PSG CT was chosen as one of 75 leading educational institutions in the country to conduct special lectures, student exchange programmes, and academic and cultural activities to promote awareness of the G20 agenda among students and the academic community.
               </p>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Section - FIXED */}
        <div className="about-card department"  id='aboutthedept'>
          <div className="about-card-header">
            <div className="about-text-content">
              <div className='title-left'>
              <h2 className="about-heading">About Department of Mathematics</h2>
              {/* <h3 className="about-subheading">Department of Mathematics</h3> */}
              <div className="about-content">
                <p>
                  Since 1951, the Department of Mathematics at PSG College of Technology continues to impart mathematical skill and analytical thinking to all Engineering and Science graduates of this institution. Over the past 7 decades with the highest standards in both research and teaching, it has seen a phenomenal growth and success. The department is equipped with 28 dedicated faculty as facilitators with a strong research base. So far, the department has produced 44 doctorates in the field of Applied and Pure Mathematics. Several outreach events, including conferences, workshops, seminars, and symposiums on a wide range of topics, are organized by the department. The department also trains engineering students in strong mathematical background to enhance and apply their skills to find solutions to their field specific problems. An appreciable number of research articles with Scopus and SCI indexes are published annually in publications that are associated with the department. The department is actively involved in undertaking sponsored research activities from various funding organizations like CSIR, DRDO, DST, AICTE, UGC, SERB.
                </p>
              </div>
              </div>
            </div>
            <div className="about-image-container">
              <img
              src={DepartmentImg}
              alt="Department of Mathematics"
              className="about-image"
              style={{ width: '280px', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Conference Section */}
        <div className="about-card college image-left"  id='aboutthecon'>
          <div className="about-card-header">
            <div className="about-image-container">
              <img src={ConferenceImg} alt="ICAMM'26 Conference" className="about-image" style={{ width: '350px', height: 'auto', background: 'White' }}/>
            </div>
            <div className="about-text-content">
              <div className='title-left'>
              <h2 className="about-heading">About ICAMM'26</h2>
              {/* <h3 className="about-subheading">PSG College of Technology</h3> */}
              <div className="about-content">
                <>
                  <p>
                    The Seventh International Conference on Applied Mathematical Models (ICAMM 2026), to be held from July 8-10, 2026, at PSG College of Technology, is a flagship event  of the Platinum Jubilee Celebrations. The conference provides a prestigious platform for academicians, researchers, and industry professionals to share innovative ideas  and explore recent advances in computational and applied mathematics.
                  </p>

                  <p><strong>ICAMM 2026 will feature:</strong></p>
                  <ul style={{ paddingLeft: '3rem' }}>
                    <li>Plenary talks</li>
                    <li>Technical paper presentations</li>
                  </ul>
                  <p></p>
                  <p>
                    <strong>The conference will be held in a hybrid mode, with invited talks from global experts, focusing on the following key areas:</strong>
                  </p>
                  <ul style={{ paddingLeft: '3rem' }}>
                    <li>Control Theory and Fractional Calculus</li>
                    <li>Cryptography and Network Security</li>
                    <li>Graph theory and Combinatorics</li>
                    <li>Optimization Techniques and Stochastic Models</li>
                    <li>Computational Mathematics</li>
                    <li>Artificial intelligence and machine learning</li>
                  </ul>
                  <p></p>
                  <p>
                    Through ICAMM 2026, the Department of Mathematics reaffirms its commitment to fostering academic excellence, interdisciplinary collaboration, and impactful research, in celebration of 75 years of PSG CT's legacy.
                  </p>
                  <button onClick={() => window.open(finalbrochure, '_blank')} className='brochsty'>Brochure</button>
                </>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
