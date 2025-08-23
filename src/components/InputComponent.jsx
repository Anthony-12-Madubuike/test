import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { GoogleBtn, Btn } from "./Btn";
export function InputComponent(props) {
  return (
    <div className="input-groupCont">
      <label>{props.tag}</label>
      <div className="input-group">
        <i className={props.icon}></i>
        <input type={props.inputType} placeholder={props.holder} id="inp" />
      </div>
    </div>
  );
}

export function TelInput(props) {
  return (
    <>
      <label>{props.tag}</label>
      <div className="input-group">
        <i className={props.icon}></i>
        <input
          type={props.inputType}
          placeholder={props.holder}
          id={props.id}
          className={props.class}
        />
      </div>
    </>
  );
}

export function PasswordInput({ tag, id = "password" }) {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null); // To reference the input element

  const togglePassword = () => {
    setShowPassword((prev) => !prev);

    // Optional: focus after toggle (not required, just illustrative)
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  return (
    <div>
      <label>{tag}</label>
      <div className="input-group" style={{ position: "relative" }}>
        <i className="bi bi-lock" style={{ color: "white" }}></i>
        <input
          type={showPassword ? "text" : "password"}
          placeholder=""
          id={id}
          className="password-inp"
          ref={passwordRef}
        />
        <i
          className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
          id="togglePassword"
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            cursor: "pointer",
            border: "none",
          }}
          onClick={togglePassword}
        ></i>
      </div>
    </div>
  );
}

