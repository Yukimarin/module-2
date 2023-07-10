import React from "react";

function WishList() {
  return (
    <div>
      <div id="landingPage-container">
        {/*Here I created the row-1 that means inside we use "UsD" & "Help" Div*/}
        <div id="row-1">
          <a href="####">
            <div className="us-USD">
              {" "}
              <div id="us-Image">
                <img
                  src="https://image.shutterstock.com/image-vector/historical-flag-united-states-48-260nw-1597080676.jpg"
                  alt="us-USD Image"
                />
              </div>{" "}
              us - USD{" "}
            </div>
          </a>
          <a href="####">
            <div className="Help">Help</div>
          </a>
        </div>
        {/*Here I created the row-2 that means inside we use "SkinStore Content" ,"Search Bar" "Account","Cart" & "Nav Bar"Div*/}
        <div id="row-2">
          {/*Here I created  that means inside we use "SkinStore Content" ,"Search Bar" "Account" &"Cart"  Div*/}
          <div id="navAbove">
            <div id="skin-col">
              <div>
                <a
                  href="landingPage.html"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  SkinStore
                </a>
              </div>
              <div>
                part of the <span>LOOKFANTASTIC</span> group
              </div>
            </div>
            <div id="search-col">
              <input
                id="search"
                type="text"
                placeholder="Search for a product or a brand..."
              />
              <i className="fas fa-search" />
            </div>
            <div id="a-col">
              <div className="dropdown">
                <button
                  className="dropbtn"
                  onclick='window.location.href="######"'
                  id="ac"
                >
                  <i className="far fa-user" /> <span>Account</span>{" "}
                </button>
                <div className="dropdown-content">
                  <a href="login.html">LOGIN</a>
                  <a href="registration.html">REGISTER </a>
                  <a href="wishlist.html">Wish List</a>
                  <a href="#">Your Order</a>
                  <a href="#">Your Referrals</a>
                </div>
              </div>
            </div>
            <div id="c-col">
              <div className="dropdown">
                <button
                  className="dropbtn"
                  onclick='window.location.href="cart.html"'
                  id="cart"
                >
                  <i className="fas fa-cart-arrow-down" />{" "}
                  <div id="cartLen">0</div> <span>Cart</span>{" "}
                </button>
                <div className="dropdown-content">
                  <a id="cardAval" href="#">
                    There are currently no items in your cart.
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Here I created " "Nav Bar" Div*/}
          <div id="nav-container">
            <nav>
              <button onclick="navSlideOut()" id="nav-btn">
                <div id="nav-icon">
                  <div />
                  <div />
                  <div />
                </div>
              </button>
              <ul id="nav-link">
                <li>
                  <button
                    id="homePage"
                    onclick='window.location.href="landingPage.html"'
                  >
                    {" "}
                    <i className="fas fa-home" />{" "}
                  </button>
                  <button id="nav-close" onclick="navSlideIn()">
                    {" "}
                    <i className="fas fa-times" />{" "}
                  </button>
                </li>
                <li onclick='window.location.href="######"'>Brands</li>
                <li onclick='window.location.href="######"'>Sale</li>
                <li onclick='window.location.href="######"'>Skin Care</li>
                <li onclick='window.location.href="######"'>Hair</li>
                <li onclick='window.location.href="######"'>Makeup</li>
                <li onclick='window.location.href="######"'>Tools</li>
                <li onclick='window.location.href="######"'>Bath &amp; Body</li>
                <li onclick='window.location.href="######"'>Self-Care</li>
                <li onclick='window.location.href="######"'>Fragrance</li>
                <li onclick='window.location.href="######"'>
                  Limited Editions
                </li>
                <li onclick='window.location.href="######"'>New</li>
                <li onclick='window.location.href="######"'>Advice</li>
                <li onclick='window.location.href="######"'>
                  <div className="us-USD">
                    {" "}
                    <div id="us-Image">
                      <img
                        src="https://image.shutterstock.com/image-vector/historical-flag-united-states-48-260nw-1597080676.jpg"
                        alt="us-USD Image"
                      />
                    </div>{" "}
                    us - USD{" "}
                  </div>
                </li>
                <li onclick='window.location.href="######"'>
                  <div className="Help">Help</div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*Here I created the row-3 that means inside we use Remining thing like what ever for example "insise content & foot part" Div*/}
        <div id="row-3">
          <div id="someOtherOffer">
            <a className="slideOffers" href="#####">
              {" "}
              <div> FREE US Shipping Over $49</div>
            </a>
            <a className="slideOffers" href="#####">
              {" "}
              <div> Refer a Friend, Get $15 </div>
            </a>
            <a className="slideOffers" href="#####">
              {" "}
              <div> New Customers Save 20% - Use Code NEWBIE</div>
            </a>
            <a className="slideOffers" href="#####">
              {" "}
              <div> Free Beauty Consultations</div>
            </a>
          </div>
          <div id="offerAds">
            <a href="">
              <div>
                15% off with code SS15 + Neocutis Firming Duo (worth $48) @ $130
                | Shop now
              </div>
            </a>
          </div>
          <div className="ProductTypeTittle">
            <h1>Wishlist</h1>
          </div>
          <div id="FilterAndSortBox">
            <select onchange="Tsort()" id="sortT">
              <option value="">Sort By</option>
              <option value="high">Price: High to Low</option>
              <option value="low">Price: Low to High</option>
            </select>
          </div>
          {/* Content  */}
          <div id="container"></div>
          {/* *********** */}
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
      </div>
    </div>
  );
}

export default WishList;
