import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import io from "./chat";

export default {
	form: formReducer,
	auth,
	io
};
