const initState = {
	isMobile: /Mobi/.test(navigator.userAgent)
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
