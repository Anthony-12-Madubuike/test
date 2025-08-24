import googleIcon from '../assets/googleIcon.svg'
import appleIcon from '../assets/appleIcon.svg'


export default function Footer() {
  return (
    <footer className="loginFooter">
      <div className="locationInfo">
        <div className="footerLogoCont">
          <div className="footerLogo">
            SWITCH <br />
            <span style={{ fontSize: '14px', fontWeight: 'lighter' }}>your everyday App</span>
          </div>

          <p>
            281 Herbert Macaulay Wy, Central Business District,
            <br />
            Federal Capital Territory
          </p>
        </div>
        <div className="SocialiconsCont">
          <p>Follow us:</p>
          <div className="Socialicons">
            <i
              className="bi bi-twitter"
              style={{
                color: 'white',
                backgroundColor: 'black',
                padding: '0.5%',
                borderRadius: '50%',
              }}


            ></i>
            <i className="bi bi-instagram"></i>
            <i
              className="bi bi-tiktok"
              style={{
                color: 'white',
                backgroundColor: 'black',
                padding: '0.5%',
                borderRadius: '50%',
              }}


            ></i>
            <i
              className="bi bi-facebook"
              style={{
                color: 'white',
                backgroundColor: 'black',
                padding: '0.5%',
                borderRadius: '50%',
              }}

            ></i>
          </div>
        </div>
      </div>
      <div className="policiesCont">
        <div className="appParent">
          <div className="appCont2">
            <p style={{ textAlign: 'start', fontSize: '14px', width: ' 60%', zIndex:'1', padding:'2%', }}>
              coming Soon!
            </p>
            <div className="appCont2Img">
              <img
                src={appleIcon}
                alt="Download on the App Store"
                className="apple2"
                style={{
                  width:'50px'
                }}
              />

              <img
                src={googleIcon}
                alt="Get it on Google Play"
                style={{
                  backgroundColor: 'black',
                  border: '1px solid rgb(197, 229, 251)',
                  color: 'white',
                  borderRadius: '50px',
                  width: '15%',
                  height:'30%',
                }}

                className="google2"
              />
            </div>
            </div>
          </div>
          <div className="policyContTxt">
            <p className="policiesTxt">Terms and Policies Privacy Notice</p>
            <p className="copyrightTxt">&copy; Copyright Switch 2021 - 2025</p>
          </div>
        </div>
    </footer>
  );
}
