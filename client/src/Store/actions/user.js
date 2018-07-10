import axios from "axios";

import {
	UPDATE_USER_NAME,
	UPDATE_USER_EMAIL,
	UPDATE_USER_PASSWORD,
	UPDATE_USER_FAIL
} from "./actionTypes";

const updateName = user => {
	return {
		type: UPDATE_USER_NAME,
		user
	};
};

const updateEmail = user => {
	return {
		type: UPDATE_USER_EMAIL,
		user
	};
};

const updatePassword = user => {
	return {
		type: UPDATE_USER_PASSWORD,
		user
	};
};

const updateFail = (err, which) => {
	return {
		type: UPDATE_USER_FAIL,
		err,
		which
	};
};

export const onUpdateName = (data, callback) => {
	return dispatch => {
		axios.put("/user/name", data).then(({ data }) => {
			const { user, err } = data;

			if (data.status) {
				dispatch(updateName(user));
			} else {
				dispatch(updateFail(err, "Name"));
			}

			if (callback) {
				callback(user);
			}
		});
	};
};

export const onUpdateEmail = (data, callback) => {
	return dispatch => {
		axios.put("/user/email", data).then(({ data }) => {
			const { user, err } = data;

			if (data.status) {
				dispatch(updateEmail(user));
			} else {
				dispatch(updateFail(err, "Email"));
			}

			if (callback) {
				callback(user);
			}
		});
	};
};

export const onUpdatePassword = (data, callback) => {
	return dispatch => {
		axios.put("/user/password", data).then(({ data }) => {
			const { user, err } = data;

			if (data.status) {
				dispatch(updatePassword(user));
			} else {
				dispatch(updateFail(err, "Password"));
			}

			if (callback) {
				callback(user);
			}
		});
	};
};
