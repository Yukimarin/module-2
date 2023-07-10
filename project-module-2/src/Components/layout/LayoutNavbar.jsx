import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LayoutNavbar() {
  return (
    <div>
      <>
        {/*Here I created the landingPage-container*/}
        <div id="landingPage-container">
          {/*Here I created the row-1 that means inside we use "UsD" & "Help" Div*/}
          <div id="row-1">
            <a href="####">
              <div className="us-USD">
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
                    <Link to="/login">LOGIN</Link>
                    <Link to="/registration">REGISTER</Link>
                    <Link to="/wishlist">Wish List</Link>
                    <Link to="/yourorder">Your Order</Link>
                    <Link to="/#">Your Referrals</Link>
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
                  <li onclick='window.location.href="######"'>
                    Bath &amp; Body
                  </li>
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
                  15% off with code SS15 + Neocutis Firming Duo (worth $48) @
                  $130 | Shop now
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default LayoutNavbar;
