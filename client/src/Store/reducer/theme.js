import grey from "@material-ui/core/colors/grey";
import { THEME_CHANGE } from "../actions/actionTypes";

const initState = {
	palette: {
		primary: {
			main: grey[900]
		},
		secondary: {
			main: grey[700]
		}
	}
};

const themeChange = (state, { palette }) => {
	return {
		...state,
		palette
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
