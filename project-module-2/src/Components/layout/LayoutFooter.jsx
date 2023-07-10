import React from "react";
import "./LayoutFooter.css";

function LayoutFooter() {
  return (
    <div>
      <div id="footerPart">
        <div className="FooterLine" />
        <div className="sochandle">
          <div id="SocialmediaHandles">
            <p>Sign up to our website and Start Shopping</p>
            <button id="signbtn">Sign Up</button>
          </div>
          <div id="conus">
            <h4>Connect with us</h4>
            <div className="foot-Social">
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="FooterLine" />
          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="footer-col">
                  <h4>Help &amp; Information</h4>
                  <ul>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Returns &amp; Refunds</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">COVID-19 Information</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>About SkinStore</h4>
                  <ul>
                    <li>
                      <a href="AboutUs.html">About Us</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                    <li>
                      <a href="#">Brand Directory</a>
                    </li>
                    <li>
                      <a href="#">Coupon Codes</a>
                    </li>
                    <li>
                      <a href="#">Refer A Friend</a>
                    </li>
                    <li>
                      <a href="#">Student Discount</a>
                    </li>
                    <li>
                      <a href="#">Join SkinStore Experts</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Legal</h4>
                  <ul>
                    <li>
                      <a href="#">Cookie Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms And Conditions</a>
                    </li>
                    <li>
                      <a href="#">Modern Slavery Statement</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>How To Contact Us</h4>
                  <ul>
                    <li>
                      <a href="#">Message Us</a>
                    </li>
                    <li>
                      <a href="#">Free Beauty Consultations</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <div className="FooterLine" />
        </div>
      </div>
    </div>
  );
}

export default LayoutFooter;
