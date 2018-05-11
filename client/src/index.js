import ReactDOM from "react-dom";
import "./styles.global.scss";
import App from "./Root/App/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(App, document.getElementById("root"));
registerServiceWorker();

/* 
    container == stateful
    components == stateless
*/
