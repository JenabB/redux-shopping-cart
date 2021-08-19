import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="m-3">
      <div className="shadow-lg">
        <img src={product.image} alt={product.title} />

        <div className="p-4">
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p className="bg-blue-400 inline-block px-3 rounded-lg mt-4 text-white">
            Rp. {product.price}
          </p>
        </div>

        <div className="p-4">
          <Link to={`/product/${product.id}`}>
            <button
              className="bg-black text-white p-2 rounded-xl mr-4"
              onClick={() => loadCurrentItem(product)}
            >
              View Item
            </button>
          </Link>
          <button onClick={() => addToCart(product.id)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
