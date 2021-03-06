import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";

const ProductDetail = ({ current, addToCart }) => {
  return (
    <div>
      <img src={current.image} alt={current.title} />

      <div>
        <p>{current.title}</p>
        <p>{current.description}</p>
        <p>{current.price}</p>
        <button onClick={() => addToCart(current.id)}>Add To Cart</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
