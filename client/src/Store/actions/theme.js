import { THEME_CHANGE } from "./actionTypes";

export const themeChange = color => {
	return {
		type: THEME_CHANGE,
		color
	};
};
