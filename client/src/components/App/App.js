import React, { Fragment } from "react";
import { CssBaseline } from "material-ui";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "../../Store/reducer/index";
import Routes from "../Routes/Routes";

const REDUCER = combineReducers(reducer);

const STORE = createStore(REDUCER);

const APP = (
    <Provider store={STORE}>
        <BrowserRouter>
            <Fragment>
                <CssBaseline />
                <Routes />
            </Fragment>
        </BrowserRouter>
    </Provider>
);

export default APP;
