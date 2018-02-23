import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./Containers/App";
import registerServiceWorker from "./registerServiceWorker";

const APP = <App />;

ReactDOM.render(APP, document.getElementById("root"));
registerServiceWorker();
