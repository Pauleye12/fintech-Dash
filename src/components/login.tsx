import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="leftLogin">
          <div className="headerLogo">
            <img className="logoImg" src="/svg/Group.svg" alt="" />
          </div>
          <div className="leftImg">
            <div className="loginImgWrapper">
              <img src="/svg/pablo-sign-in 1.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="rightLogin">
          <div className="rightLoginWrapper">
            <div className="welcomeText">
              <h1>Welcome!</h1>
              <h2>Enter details to login</h2>
            </div>
            <div className="form">
              <form action="">
                <div className="formDet emailWrapper">
                  <input
                    className="emailInput"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </div>
                <div className="formDet passwordWrapper">
                  <input
                    className="passwordInput"
                    type="password"
                    name="loginPassword"
                    id="loginPassword"
                    placeholder="password"
                  />
                  <span>show</span>
                </div>
                <p>forgot password? </p>
                <Link to="/Dashboard">
                  <button className="loginBtn">LOGIN</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
