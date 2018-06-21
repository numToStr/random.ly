import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./styles.global.scss";
import App from "./Root/App/App";
import registerServiceWorker from "./registerServiceWorker";

import reducer from "./Store/reducer/index";
// redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const REDUCER = combineReducers(reducer);

const STORE = createStore(
	REDUCER,
	composeEnhancers(applyMiddleware(thunk /*Add Middleware*/))
);

ReactDOM.render(
	<Provider store={STORE}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();

/* 
    container == stateful
    components == stateless
*/
