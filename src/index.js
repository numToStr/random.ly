import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.global.css";

import App from "./Containers/App";
import registerServiceWorker from "./registerServiceWorker";

const APP = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(APP, document.getElementById("root"));
registerServiceWorker();
