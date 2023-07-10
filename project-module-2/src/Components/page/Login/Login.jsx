import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post("url_của_api", payload);
      console.log("Đăng nhập thành công:", response.data);

      // Xử lí sau khi đăng nhập thành công
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
    }
  };
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
        <div id="main">
          <div className="">
            <div className="container_login">
              <div className="login_box">
                <h2>Existing Customers</h2>
                <form>
                  <label>*Email Address</label>
                  <div className="c1">
                    <input
                      id="email"
                      type="text"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <label>*Password</label>
                  <div>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                  <a href="forgot_pass.html">FORGOTTEN YOUR PASSWORD?</a>
                  <input
                    type="submit"
                    defaultValue="SIGN IN"
                    name="contine"
                    id="button"
                  />
                  <p>Or, Continue with</p>
                  <div>
                    <div id="socialconnect">
                      <div className="facebook">
                        <img
                          className="fb"
                          src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
                          alt=""
                        />
                        <span id="">&nbsp;Facebook</span>
                      </div>
                      <div className="google">
                        <img
                          className="go"
                          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                          alt=""
                        />
                        <span id="">&nbsp;Google</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container2">
            <h2>New Customers</h2>
            <a href="registration.html">
              {" "}
              <input type="submit" defaultValue="REGISTER" id="button1" />
            </a>
          </div>
        </div>
      </>
    </div>
  );
}

export default Login;
