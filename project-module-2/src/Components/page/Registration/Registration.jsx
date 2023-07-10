import React, { useState } from "react";
import axios from "axios";
import "./registration.css";

function Registration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users", {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        cart: [],
      })
      .then((response) => {
        console.log("Dữ liệu đã được lưu trên API:", response.data);

        setFullName("");
        setEmail("");
        setConfirmEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu lưu dữ liệu:", error);
      });
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
        <form onSubmit={handleSubmit}>
          <div className="">
            <h2>About You</h2>
            <h3>Sign Up With</h3>
            <div id="socialconnect">
              <div className="facebook">
                <img
                  className="fb"
                  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
                  alt=""
                />
                <div id="ff">Facebook</div>
              </div>
              <div className="google">
                <img
                  className="go"
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                />
                <span id="gg">&nbsp;Google</span>
              </div>
            </div>
            <hr />
            <h3>Or create an email account</h3>
            <label htmlFor="name">
              <b>Full Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Full name"
              name="name"
              id="name"
              required=""
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="cemail">
              <b> Confirm Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter confirm Email"
              name="email"
              id="cemail"
              required=""
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="psw-repeat">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="confirm Password"
              name="psw-repeat"
              id="psw-repeat"
              required=""
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="number">
              <b>Phone Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter phone name"
              name="name"
              id="number"
              required=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" className="registerbtn">
              CONTINUE
            </button>
            <p>
              By preceeding you are confirming that you agree to our{" "}
              <a href="">Terms and Conditions</a> and{" "}
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </form>
      </>
    </div>
  );
}

export default Registration;
