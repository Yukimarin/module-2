import React from "react";
import "./shopStyles.css";

function Shop1() {
  return (
    <div>
      <div className="ProductTypeTittle">
        <h1>Christophe Robin Products</h1>
      </div>
      <div className="ProductTypeTittle">
        <p>
          Keep your skin clean and refreshed with our extensive range of skin
          cleansers. We have a thorough choice of cleansers, micellar waters and
          make-up removers designed to cater for each individual skin type and
          concern, from a wide range of brands. Whether you suffer from
          sensitive, oily or acne prone skin, you can achieve the results you
          require from our tailored choices. For a professional cleanse, try our
          range of premium brands such as Caudalie,
          <span id="dots">...</span>
          <span id="more">
            Avene and Decleor. For a more medicated, specialized cleanse, why
            not check out SkinCeuticals, Murad or Paula's Choice? Remove dirt,
            grime and impurities effectively by ensuring one of our cleansers is
            incorporated into your daily skin care regime.
          </span>
        </p>
      </div>
      <button onclick="myFunction()" id="myBtn">
        Read more
      </button>
      <div id="FilterAndSortBox">
        <select onchange="Tsort()" id="sortT">
          <option value="">Sort By</option>
          <option value="high">Price: High to Low</option>
          <option value="low">Price: Low to High</option>
        </select>
        <input type="text" />
        <select name="" id="">
          <option value="">Skin Product Type</option>
          <option value="">Price: High to Low</option>
          <option value="">Price: Low to High</option>
        </select>
        <select name="" id="">
          <option value="">Skincar Format</option>
          <option value="">Price: High to Low</option>
          <option value="">Price: Low to High</option>
        </select>
        <select name="" id="">
          <option value="">Skincare Tools</option>
          <option value="">Price: High to Low</option>
          <option value="">Price: Low to High</option>
        </select>
        <select name="" id="">
          <option value="">Skin Type</option>
          <option value="">Price: High to Low</option>
          <option value="">Price: Low to High</option>
        </select>
        <p>+Filters</p>
      </div>
      {/* product  */}
      <div id="container" />
    </div>
  );
}

export default Shop1;
