import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="bg-gray-400 shadow-lg sticky top-0 py-3 text-white items-center flex justify-between px-8">
      <Link to="/">Home</Link>
      <div className="bg-gray-500 p-2 rounded-lg">
        <Link to="/cart">
          <div className="flex">
            <h1>Cart</h1>
            <h1 className="mx-4 bg-white text-black px-3 rounded-lg">
              {cartCount}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
