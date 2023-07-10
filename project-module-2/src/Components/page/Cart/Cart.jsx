import React from "react";
import "../Shop/shopStyles.css";

function Cart() {
  return (
    <div>
      <div className="ProductTypeTittle">
        <h1>Cart</h1>
      </div>
      <div id="FilterAndSortBox">
        <select onchange="Tsort()" id="sortT">
          <option value="">Sort By</option>
          <option value="high">Price: High to Low</option>
          <option value="low">Price: Low to High</option>
        </select>
        <button
          id="checkOut"
          style={{ padding: 2 }}
          onclick='window.location.href="checkout.html"'
        >
          {" "}
          Checkout
        </button>
        <b>
          {" "}
          <span>
            Total Price:-
            <span id="totalPrice" />
          </span>
        </b>
      </div>
      {/* Content  */}
      <div id="container"></div>
      {/* *********** */}
    </div>
  );
}

export default Cart;
