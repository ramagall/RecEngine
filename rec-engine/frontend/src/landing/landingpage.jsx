import { LandingPageHeader, LandingPageButton, LandingPageTextFields } from "./landing-components.jsx";

function LandingPage() {
    return(
      <>
        <div className="greyTop"></div>
        <a href="https://lambtele.com" className="homeNav">Home</a>
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
            <img className="logoImg" src="./assets/images/LambNoBackground.png" alt="Lamb Telecom Logo"></img>
          </div>
          <div className="contactInfo">
            <h3 className='getInTouch'>
              GET IN TOUCH
            </h3>
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
  
  export default LandingPage;