import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import io from "./chat";
import theme from "./theme";

export default {
	form: formReducer,
	auth,
	io,
	theme
};
