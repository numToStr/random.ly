import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import "./index.global.css";

import App from "./Containers/App";
import registerServiceWorker from "./registerServiceWorker";

//reducer
import reducer from "./store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const STORE = createStore(reducer, composeEnhancers(applyMiddleware()));

const APP = (
  <Provider store={STORE}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(APP, document.getElementById("root"));
registerServiceWorker();
