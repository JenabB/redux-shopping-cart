import React from "react";
import { connect, useSelector } from "react-redux";
import Product from "./Product/Product";
import Select from "react-select";
import { sortProductsByPrice } from "../../redux/Shopping/shopping-actions";

const Products = ({ sortProductsByPrice }) => {
  const products = useSelector((state) => state.shop.products);

  const options = [
    { value: "", label: "" },
    { value: "lowest", label: "lowest" },
    { value: "highest", label: "highest" },
  ];

  return (
    <div className="lg:w-3/4 mx-auto my-10">
      <div>
        <label>Order by price</label>
        <Select
          options={options}
          onChange={(e) => sortProductsByPrice(products, e.value)}
        />

        <div></div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-2">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortProductsByPrice: (products, sort) =>
      dispatch(sortProductsByPrice(products, sort)),
  };
};

export default connect(null, mapDispatchToProps)(Products);
