import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "material-ui";
import "./styles.global.scss";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "./Store/reducer/index";

const REDUCER = combineReducers(reducer);

const STORE = createStore(REDUCER);

const APP = (
    <Provider store={STORE}>
        <Fragment>
            <CssBaseline />
            <App />
        </Fragment>
    </Provider>
);

ReactDOM.render(APP, document.getElementById("root"));
registerServiceWorker();
