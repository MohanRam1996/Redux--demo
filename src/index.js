import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import middlewares from "./middlewares";

//creating redux store
const store = createStore(rootReducer, middlewares);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
