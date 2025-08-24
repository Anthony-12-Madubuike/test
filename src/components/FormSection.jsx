import { Link } from "react-router-dom"; 
import { InputComponent, TelInput, PasswordInput}  from "./InputComponent"
import {GoogleBtn, Btn} from "./Btn";
export default function FormSection() {

  return (
    <div className="logincontainer">
      <div className="LoginHeader">
        <h1>Welcome Back.</h1>
        <p style={{ color: "#d7d8da" }}>
          please enter your login information to begin your daily <br />
          activities.
        </p>
      </div>

      <form action="" className="form">
        <GoogleBtn />
        <div className="input-groupContParent">
          <InputComponent
            inputType="text"
            tag="Username"
            icon="bi bi-at"
            input-holder="Enter your username address"
          />
          <PasswordInput
          tag="Password"
          />
        </div>
        <div className="altLogin">
          <div className="altLoginFirstCont">
            <div className="remeberMecont">
              <input type="checkbox" name="remeberME" />
              <p>Remeber me</p>
            </div>
            <div className="forgotPasswordCont">
              <a href="#">Forgot password</a>
            </div>
          </div>

          <div className="loginBtnCont">
            <Btn 
            class="button"
            btnTxt="Login" />
            <div className="altLoginLinksCont">
              <p>Don't have an account?</p>
              <Link
              className="signupLink"
                to="/Signup"
                style={{
                  color: " #a5c2fa",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
