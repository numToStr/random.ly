import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.global.css";

import App from "./Containers/App";
import registerServiceWorker from "./registerServiceWorker";

//reducer
import messagesReducer from "./store/reducers/messages";
import usersReducer from "./store/reducers/users";
import authReducer from "./store/reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const REDUCER = combineReducers({
  messages: messagesReducer,
  users: usersReducer,
  auth: authReducer
});

const STORE = createStore(REDUCER, composeEnhancers(applyMiddleware(thunk)));

const APP = (
  <Provider store={STORE}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(APP, document.getElementById("root"));
registerServiceWorker();
