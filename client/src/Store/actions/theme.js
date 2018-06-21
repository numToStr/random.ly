import { THEME_CHANGE } from "./actionTypes";

export const themeChange = palette => {
	const PALETTE = JSON.stringify(palette);
	localStorage.setItem("randomly_theme", PALETTE);

	return {
		type: THEME_CHANGE,
		palette
	};
};
