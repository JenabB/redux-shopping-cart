import * as actionTypes from "./shopping-types";
import products from "./products.json";

const INITIAL_STATE = {
  products: products.products,
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {};

    case actionTypes.ADJUST_QTY:
      return {};

    case actionTypes.LOAD_CURRENT_ITEM:
      return {};

    default:
      return state;
  }
};

export default shopReducer;
