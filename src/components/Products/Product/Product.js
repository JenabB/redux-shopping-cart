import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//redux actions
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

//utils
import { formatRp } from "../../../utils/formatRp";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="m-3">
      <div className="shadow-lg rounded-lg">
        <img
          className="rounded-t-lg"
          style={{ height: "300px", width: "100%", objectFit: "cover" }}
          src={product.image}
          alt={product.title}
        />

        <div className="p-4">
          <p className="font-bold mb-2">{product.title}</p>
          <p className="line-clamp-2">{product.description}</p>
          <p className="text-blue-400 font-bold inline-block px-3 mt-4">
            {formatRp(product.price)}
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
