// src/pages/Signup/Signup.jsx

import { useEffect } from "react";
// Import CSS
import "./Signup.css";

// Import components
import Nav from "../../components/Nav";
import { GoogleBtn, Btn } from "../../components/Btn";
import { Link } from "react-router-dom";
import HeroSection from "../../components/HerosSection";
import {
  InputComponent,
  TelInput,
  PasswordInput,
} from "../../components/InputComponent";
import Footer from "../../components/Footer";

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign up submitted!");
  };

  return (
    <div className="signup-body">
      <Nav />
      {/* <Sidebar /> */}
      <div className="header">
        <p id="headerTxt" className="motoTxt">
          Experience The <span className="switchHeaderTxt">Switch</span> <br />
        </p>
        <p className="motoTxt2" id="headerTxt">
          Experience The Convence!
        </p>
        <div className="headerMottoCont">
          <p className="headerMottoTxt">
            Delivery | Mobility | Financial services
          </p>
          <div className="headerMottoCont2">
            <p className="headerMottoTxt2">Achieve Delivery Execellence</p>
            <p className="headerLocation">Currently Serving Abuja, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="RegformCont">
          <form action="" className="form" style={{ justifyContent: "center" }}>
            <GoogleBtn />

            <div className="scrollable-form-section">
              <InputComponent
                tag="First Name"
                icon="bi bi-person-circle"
                inputType="text"
              />
              <InputComponent
                tag="Last Name"
                icon="bi bi-person-circle"
                inputType="text"
              />
              <TelInput
                tag="Phone Number"
                icon="bi bi-telephone"
                inputType="tel"
                id="phone"
                class="phone"
              />

              <TelInput
                tag="Phone Number"
                icon="bi bi-telephone"
                inputType="tel"
                id="phone"
                class="whatsappNum"
              />
              <InputComponent
                tag="Email"
                icon="bi bi-envelope"
                inputType="email"
              />
              <InputComponent
                tag="Referral code (Optional)"
                icon="bi bi-gift"
                inputType="text"
              />
              <PasswordInput tag="Password" />
              <PasswordInput tag="Confirm Password" icon="bi bi-lock" />
              <InputComponent tag="Username" icon="bi bi-at" />
            </div>
          </form>
          <div className="agreementCont">
            <input type="checkbox" id="agreementCheckbox" required />
            <label>
              By signing up, you agreed to our
              <span> Terms of Service </span> and <span>Privacy Policy</span>,{" "}
              <br /> and confirm that you are 18 years and above.
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "18px,",
            }}
          >
            <Btn btnTxt="Signup"/>
          </div>
          <p className="altLogin">
            Already registered?{" "}
            <Link
              to="/"
              style={{
                color: "red",
                fontFamily: "PoppinsBold",
                fontSize: "10px",
                marginLeft: "3%",
                textDecoration: "none",
              }}
            >
              Login here
            </Link>
          </p>
        </div>
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}
