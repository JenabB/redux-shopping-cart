import React, { useState } from "react";
import { connect } from "react-redux";
import { formatRp } from "../utils/formatRp";
//redux actions
import { adjustQty, removeFromCart } from "../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.quantity);

  const handleChange = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="lg:m-4 m-2">
      <img src={item.image} alt={item.title} />

      <div>
        <p className="">{item.title}</p>
        <p className="line-clamp-2">{item.description}</p>
        <p className="text-blue-400 font-bold">{formatRp(item.price)}</p>
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          min="1"
          type="number"
          id="quantity"
          name="quantity"
          value={input}
          onChange={handleChange}
        />
      </div>

      <button onClick={() => removeFromCart(item.id)}></button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapDispatchToProps)(CartItem);
