import axios from "axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = data => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		data
	};
};

export const authFail = error => {
	return {
		type: actionTypes.AUTH_FAIL,
		error
	};
};

export const authLogout = () => {
	localStorage.removeItem("TOKEN");
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const signup = (data, callback) => {
	return dispatch => {
		dispatch(authStart());
		axios
			.post("/auth/signup", data)
			.then(d => {
				const D = d.data;
				if (D.status) {
					dispatch(
						authSuccess({
							user: {
								id: null,
								name: null,
								email: null
							},
							token: null,
							loading: false,
							error: null
						})
					);
					callback(D);
				} else {
					dispatch(authFail(D.err));
				}
			})
			.catch(e => {
				dispatch(authFail(e));
				throw e;
			});
	};
};

export const login = (data, callback) => {
	return dispatch => {
		dispatch(authStart());
		axios
			.post("/auth/login", data)
			.then(d => {
				const D = d.data;
				if (D.status && D.user) {
					localStorage.setItem("TOKEN", D.token);
					dispatch(authSuccess(D));
					if (callback) {
						callback(D);
					}
				} else {
					dispatch(authFail(D.err));
				}
			})
			.catch(e => {
				dispatch(authFail(e));
				throw e;
			});
	};
};

export const authAutoSignIn = callback => {
	return dispatch => {
		const token = localStorage.getItem("TOKEN");
		if (!token) {
			dispatch(authLogout());
		} else {
			dispatch(authStart());
			axios
				.post("/auth/authenticate", {
					token: token
				})
				.then(d => {
					const D = d.data;
					if (D.status) {
						dispatch(
							authSuccess({
								user: D.user,
								token: token
							})
						);
						if (callback) {
							callback(D);
						}
					} else {
						dispatch(authFail(D.message));
					}
				})
				.catch(error => {
					dispatch(authFail(error));
				});
		}
	};
};
