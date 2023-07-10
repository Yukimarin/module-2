import React from "react";
import "./forgot.css";

function ForgotPass() {
  return (
    <div>
      <>
        <div id="nav">
          <div className="conatiner_logo">
            <a href="\">
              <img
                src="https://s1.thcdn.com/enterprise/assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div id="container">
          <h2>Forgotten your password?</h2>
          <p>
            Please enter your email address below and we'll email you
            instructions to reset it
          </p>
          <div>
            <label id="email">Email Address</label>
            <input
              id="email"
              type="text"
              placeholder="email address"
              required=""
            />
          </div>
          <div>
            <input id="button" type="submit" defaultValue="Reset Password" />
          </div>
        </div>
      </>
    </div>
  );
}

export default ForgotPass;
