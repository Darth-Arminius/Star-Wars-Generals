import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Router from "./components/Router";

import "./App.css";

const App = ({ store }) => (
  <Provider store={store}>
    <div className="App">
      <Router />
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired
};

export default App;
