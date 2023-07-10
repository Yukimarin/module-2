import React from "react";
import "./landingPageStyle.css";
import LayoutNavbar from "../../layout/LayoutNavbar";
import LayoutFooter from "../../layout/LayoutFooter";

function LandingPage() {
  return (
    <div>
      <LayoutNavbar />
      <div id="landingPage-container">
        <div id="row-3">
          <div id="slidingPart">
            <a href="###########">
              <div>
                {/* <img
                    src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/30/1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot03-1180x450-091130.jpg"
                    width="100%"
                    height="auto"
                    alt=""
                  /> */}
              </div>
            </a>
          </div>
          <div id="skinBrands">
            <div>
              <a href="#######">
                <img
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#######">
                <img
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#######">
                <img
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/29/original-OLAPLEX_Logo_320x140-011226-040229.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#######">
                <img
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#######">
                <img
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-eltamd-logo-color-hut-grp-045929-124658.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#######">
                <img
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/37/original-pca-logo-1024x414-010955-040237.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <h2 style={{ textAlign: "center" }}>Trending Offers</h2>
          <div id="trendingOffers" />
          <h2 style={{ textAlign: "center" }}>
            What People Are Buying Right Now
          </h2>
          <div id="rightNowOffers" />
          <h2 style={{ textAlign: "center" }}>Over On the Blog...</h2>
          <div id="Blog" />
        </div>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default LandingPage;
