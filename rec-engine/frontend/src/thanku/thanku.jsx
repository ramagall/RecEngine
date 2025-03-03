import { ThankUHeader } from "./thanku-components.jsx";
import { GreyTop } from "../global/global-components.jsx";
import './thanku.css';

function ThankU() {
    return(
      <>
        <GreyTop></GreyTop>
        <a href="https://lambtele.com" className="homeNav">Home</a>
        <div>
          <ThankUHeader/>
        </div>
        <div className="footer">
          <div className="logo">
            <img className="logoImg" src="src/assets/images/LambNoBackground.png" alt="Lamb Telecom Logo"></img>
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
  
  export default ThankU;