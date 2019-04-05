import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";
import App from "./App";

import "./index.css";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App.jsx", () => {
    // eslint-disable-next-line global-require
    const NextRootContainer = require("./App").default;
    render(NextRootContainer);
  });
}
