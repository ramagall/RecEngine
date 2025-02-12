import React from 'react';

const GeneralTechnology = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Progress bar */}
      <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{ width: '0%', height: '20px', backgroundColor: 'lightcyan' }}></div>
      </div>

      {/* Title */}
      <h1 style={{ textAlign: 'left', color: '#333' }}>General Technology Questionnaire</h1>

      <div style={{ marginTop: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: '0', color: '#333' }}>
          
          {/* Organization Type */}
          <li style={{ marginBottom: '15px' }}>
            <label htmlFor="organizationType" style={{ fontWeight: 'bold' }}>
              Are you a non-profit organization, church, school, etc.?
            </label>
            <input
              id="organizationType"
              type="text"
              placeholder="Enter your answer"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </li>
          
          {/* Technology Solutions Needed */}
          <li style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>What solutions or technology are you looking for us to help you with?</label>
            <div style={{ marginTop: '10px' }}>
              {['Cloud Computing', 'Cybersecurity', 'Data Analytics', 'IT Support', 'Software Development'].map(option => (
                <label key={option} style={{ display: 'block', marginBottom: '5px' }}>
                  <input type="checkbox" value={option} style={{ marginRight: '10px' }} />
                  {option}
                </label>
              ))}
            </div>
          </li>
          
          {/* Immediate Needs */}
          <li style={{ marginBottom: '15px' }}>
            <label htmlFor="immediateNeeds" style={{ fontWeight: 'bold' }}>
              What are your immediate technology needs for your business? (Optional)
            </label>
            <textarea
              id="immediateNeeds"
              placeholder="Describe your immediate needs"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </li>
          
          {/* Planned IT Projects */}
          <li style={{ marginBottom: '15px' }}>
            <label htmlFor="plannedProjects" style={{ fontWeight: 'bold' }}>
              What current or planned IT projects are you working on? (Optional)
            </label>
            <textarea
              id="plannedProjects"
              placeholder="Describe your planned projects"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GeneralTechnology;
