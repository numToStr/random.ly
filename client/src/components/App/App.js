import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

// components
import reducer from "../../Store/reducer/index";
import Routes from "../Routes/Routes";

// redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const REDUCER = combineReducers(reducer);

const STORE = createStore(REDUCER, composeEnhancers(
    applyMiddleware(/*Add Middleware*/)
));

const APP = (
    <Provider store={STORE}>
        <BrowserRouter>
            <Fragment>
                <Routes />
            </Fragment>
        </BrowserRouter>
    </Provider>
);

export default APP;
