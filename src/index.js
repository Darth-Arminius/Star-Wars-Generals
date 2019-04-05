import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import { AppContainer } from "react-hot-loader";
import App from "./App";

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
