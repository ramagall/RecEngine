import React from 'react';

const Phones = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* progress bar */}
      <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
        {/* filling of the progress bar */}
        <div style={{ width: '20%', height: '20px', backgroundColor: 'lightcyan' }}></div>
      </div>

      {/* title */}
      <h1 style={{ textAlign: 'left', color: '#333' }}>Let's Talk Phones</h1>

        <div style={{ marginTop: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: '0', color: '#333' }}>

          {/* q 1 */}
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
            <label htmlFor="question1" style={{ marginRight: '10px' }}>
              Number of employees requiring phone licensing:
            </label>
            <input
              id="question1"
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '130px',
                maxWidth: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </li>

          {/* q 2 */}
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
            <label htmlFor="question2" style={{ marginRight: '10px' }}>How many active users?</label>
            <input
              id="question2"
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '130px',
                maxWidth: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </li>

          {/* q 3 */}
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
            <label htmlFor="question3" style={{ marginRight: '10px' }}>
              How many courtesy phones? (for public use)
            </label>
            <input
              id="question3"
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '130px',
                maxWidth: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </li>

          {/* q 4 */}
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
            <label htmlFor="question4" style={{ marginRight: '10px' }}>
              Number of employees requiring a physical device:
            </label>
            <input
              id="question4"
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '130px',
                maxWidth: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </li>

          {/* q 5 */}
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
            <label htmlFor="question5" style={{ marginRight: '10px' }}>
              How many phone numbers does the organization currently have?
            </label>
            <input
              id="question5"
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '130px',
                maxWidth: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </li>

          {/* q 6 */}
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
            <label htmlFor="question6" style={{ marginRight: '10px' }}>How many toll-free numbers?</label>
            <input
              id="question6"
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '130px',
                maxWidth: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </li>
        </ul>
        <div style={{ marginTop: '30px' }}>
          {/* q 7 */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#333', marginBottom: '10px' }}>
              <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
              Are there any other solutions you are already considering?
            </p>
            <input
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* q 8 */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#333', marginBottom: '10px' }}>
              <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
              Why are you considering a change from your current system?
            </p>
            <input
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* q 9 */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#333', marginBottom: '10px' }}>
              <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
              What do you like about your current system?
            </p>
            <input
              type="text"
              placeholder="Enter your answer"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phones;
