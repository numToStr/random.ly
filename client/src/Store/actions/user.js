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

const updateFail = () => {
	return {
		type: UPDATE_USER_FAIL
	};
};

export const onUpdateName = (data, callback) => {
	return dispatch => {
		axios.put("/user/name", data).then(({ data }) => {
			if (data.status) {
				const { user } = data;
				dispatch(updateName(user));
			} else {
				dispatch(updateFail());
			}
		});
	};
};

export const onUpdateEmail = (data, callback) => {
	return dispatch => {
		axios.put("/user/email", data).then(({ data }) => {
			if (data.status) {
				const { user } = data;
				dispatch(updateEmail(user));
			} else {
				dispatch(updateFail());
			}
		});
	};
};

export const onUpdatePassword = (data, callback) => {
	return dispatch => {
		axios.put("/user/password", data).then(({ data }) => {
			if (data.status) {
				const { user } = data;
				dispatch(updatePassword(user));
			} else {
				dispatch(updateFail());
			}
		});
	};
};
