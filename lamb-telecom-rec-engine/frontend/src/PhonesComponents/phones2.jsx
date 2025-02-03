import React from 'react';

const Phones2 = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* progress bar */}
      <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
        {/* filling progress bar */}
        <div style={{ width: '70%', height: '20px', backgroundColor: 'lightcyan' }}></div>
      </div>

      {/* title */}
      <h1 style={{ textAlign: 'left', color: '#333' }}>Phones Continued </h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
  
  
  <div style={{ width: '45%' }}>
    {/* q 1 */}
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
      <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
      <label htmlFor="question1" style={{ marginRight: '10px' }}>
        What phone system do you have today?
      </label>
    </li>
    

    {/* q 2 */}
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
      <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
      <label htmlFor="question2" style={{ marginRight: '10px' }}>
        What services would you like your system to integrate with?
      </label>
    </li>
  </div>

  <div style={{ width: '45%', textAlign: 'right' }}>
    {/* q 3 */}
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '15px' }}>
      <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
      <label htmlFor="question3">
        How many phone lines do you currently have?
      </label>
    </li>

    {/* q 4 */}
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '15px' }}>
      <span style={{ color: 'cyan', marginRight: '10px' }}>---</span>
      <label htmlFor="question4">
        Do you need international calling capabilities?
      </label>
    </li>
</div>

</div>

    {/* next page button */}
    <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
    <button className="landingButton">Next Page</button>

    </div>
    </div>

  );
};

export default Phones2;
