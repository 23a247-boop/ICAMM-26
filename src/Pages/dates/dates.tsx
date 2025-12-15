import React from 'react';
import './dates.css';

const Dates: React.FC = () => {
  const importantDates = [
    {
      id: 1,
      title: "Paper Submission",
      date: "April 29 , 2026",
      extended: "",
      icon: "📝",
      description: "Submit your original research papers",
      color: "blue",
      status: "pending"
    },
    {
      id: 2,
      title: "Notification of Acceptance",
      date: "May 29, 2026",
      icon: "📧",
      description: "Authors will be notified about paper acceptance",
      color: "green",
      status: "pending"
    },
    {
      id: 3,
      title: "Camera Ready Paper Submission",
      date: "June 10, 2026",
      icon: "📄",
      description: "Submit final version of accepted papers",
      color: "orange",
      status: "pending"
    },
    {
      id: 4,
      title: "Author Registration",
      date: "June 17 , 2026",
      icon: "✅",
      description: "Complete registration for conference attendance",
      color: "purple",
      status: "pending"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="dates-container">
        {/* Background decorative elements */}
        <div className="dates-bg-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>

      <div className="dates-content">
        <div className="dates-header">
          <h2 className="dates-title">
            IMPORTANT DATES
          </h2>
          <p className="dates-subtitle">
            Mark your calendar with these key deadlines for ICAMM-26
          </p>
        </div>

        <div className="dates-table-wrapper">
          <table className="dates-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Deadline</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {importantDates.map((d) => (
                <tr key={d.id} className={`${d.color}`}>
                  <td className="td-title">{d.title}</td>
                  <td className="td-date">{d.date}</td>
                  <td className="td-desc">{d.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Program Schedule Section */}
        <div className="program-schedule">
          <div className="schedule-header">
            <h2 className="schedule-title">
              PROGRAM SCHEDULE
            </h2>
            <p className="schedule-subtitle">
              Explore the conference agenda day by day
            </p>
          </div>

          <div className="schedule-days">
            <div className="day-circle day-1">
              <a href="#" className="day-link">
                <div className="day-content">
                  <span className="day-number">1</span>
                  <span className="day-label">Day 1</span>
                </div>
                <div className="day-decoration"></div>
              </a>
            </div>

            <div className="day-circle day-2">
              <a href="#" className="day-link">
                <div className="day-content">
                  <span className="day-number">2</span>
                  <span className="day-label">Day 2</span>
                </div>
                <div className="day-decoration"></div>
              </a>
            </div>

            <div className="day-circle day-3">
              <a href="#" className="day-link">
                <div className="day-content">
                  <span className="day-number">3</span>
                  <span className="day-label">Day 3</span>
                </div>
                <div className="day-decoration"></div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Dates;
