import {
	IO_START,
	IO_CONNECTED,
	IO_MESSAGE,
	IO_FAIL,
	IO_DISCONNECTED
} from "../actions/actionTypes";

const initState = {
	status: null,
	loading: false,
	error: null,
	messages: [],
	users: []
};

const ioStart = (state, action) => {
	return {
		...state,
		loading: true,
		error: null,
		messages: []
	};
};

export const ioConnected = (state, { users }) => {
	return {
		...state,
		status: "User Connected",
		loading: false,
		error: null,
		messages: [],
		users
	};
};

export const ioMessage = (state, { messages }) => {
	return {
		...state,
		messages
	};
};

export const ioFail = (state, { error }) => {
	return {
		...state,
		error
	};
};

export const ioDisconnected = (state, action) => {
	return {
		...state,
		status: "User Disconnected",
		loading: false,
		error: null,
		messages: []
	};
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case IO_START:
			return ioStart(state, action);
		case IO_CONNECTED:
			return ioConnected(state, action);
		case IO_MESSAGE:
			return ioMessage(state, action);
		case IO_FAIL:
			return ioFail(state, action);
		case IO_DISCONNECTED:
			return ioDisconnected(state, action);
		default:
			return state;
	}
};

export default reducer;
