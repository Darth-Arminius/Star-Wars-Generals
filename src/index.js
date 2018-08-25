import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import createAppStore from "./createAppStore";

const store = createAppStore();

const render = Component => {
  ReactDOM.render(<Component store={store} />, document.getElementById("root"));
};

registerServiceWorker();
render(App);

if (module.hot) {
  module.hot.accept("./App", () => render(App));
}
