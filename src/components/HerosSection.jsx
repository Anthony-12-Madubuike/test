import mockupImg from '../assets/mockup.jpg';
import googleIcon from  '../assets/googleIcon.svg'
import appleIcon from '../assets/appleIcon.svg';

export default function HeroSection() {
  return (
      <div className="mockup">
        <div className="mockupImg">
          <img src={mockupImg} alt="mockup" className="phoneMockup" />
        </div>
        <div className="mockupcontainerFooter">
          <p className="mockupTxt">Coming soon!</p>
          <div className="appCont">
            <img
              src={appleIcon}
              alt="Get it on Apple Store"
              className="apple"
            />

            <img
              src={googleIcon}  
              alt="Get it on Google Play"
              className="google"
            />
          </div>
        </div>
      </div>
  );
}
