import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import common from "./common";

export default {
	form: formReducer,
	common,
	auth
};
