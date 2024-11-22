import LandingPageHeader from './LandingPageComponents/LandingPageHeader.jsx'
import LandingPageTextFields from './LandingPageComponents/LandingPageTextFields.jsx'
import LandingPageButton from './LandingPageComponents/LandingPageButton.jsx'
import './index.css'


function App() {
  return(
    <>
      <div className="greyTop">
      </div>
      <div>
        <LandingPageHeader/>
      </div>
      <div className="startingInfo">
      <LandingPageTextFields/>  
      </div>
      <div className="landingButtonBox">
      <LandingPageButton></LandingPageButton>
      </div>
      <div className="footer">
        <div className="logo">
          <img className="logoImg" src="/LambNoBackground.png" alt="Lamb Telecom Logo"></img>
        </div>
        <div className="contactInfo">
          <h2 className='getInTouch'>
            GET IN TOUCH
          </h2>
          <h3 className='phoneNum'>
          +1(720) - 927 - 1997
          </h3>
          <h3 className='phoneNum'>
            zach@lambtelcom.com
          </h3>
        </div>
      </div>
    </>
  );
}
export default App
