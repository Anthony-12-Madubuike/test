export  function GoogleBtn(){
    return(
        <div className="googleSigninCont">
          <button className="gsi-material-button">
            <div className="gsi-material-button-content-wrapper">
              <div className="gsi-material-button-icon">
                <i className="bi bi-google"></i>
                <span>+</span>
              </div>
              <span className="gsi-material-button-contents">
                Continue with Google
              </span>
            </div>
          </button>
        </div>
    )
}

export function Btn(props){
    return(
            <button className={props.class}>{props.btnTxt}</button>

    )
}