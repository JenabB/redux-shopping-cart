import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";
import Products from "./components/Products/Products";

const App = ({ current }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Products} />
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
