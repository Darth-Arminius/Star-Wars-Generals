import { createStore as createReduxStore } from "redux";

const reducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const createAppStore = () => {
  const store = createReduxStore(reducer, []);

  return store;
};

export default createAppStore;
