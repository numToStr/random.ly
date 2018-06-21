import { THEME_CHANGE } from "./actionTypes";

export const themeChange = palette => {
	return {
		type: THEME_CHANGE,
		palette
	};
};
