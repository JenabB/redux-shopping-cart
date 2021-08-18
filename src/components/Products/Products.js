import React from "react";
import { connect } from "react-redux";
import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div className="w-3/4 mx-auto my-10">
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
