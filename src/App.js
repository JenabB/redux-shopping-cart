import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";

import Products from "./components/Products/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

const App = ({ current }) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
        {!current ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/product/:id" component={ProductDetail} />
        )}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
