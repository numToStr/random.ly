import grey from "@material-ui/core/colors/grey";
import { THEME_CHANGE } from "../actions/actionTypes";

const initState = {
	color: grey[900]
};

const themeChange = (state, { color }) => {
	return {
		...state,
		color
	};
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case THEME_CHANGE:
			return themeChange(state, action);
		default:
			return state;
	}
};

export default reducer;
