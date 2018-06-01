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
	messages: []
};

const ioStart = (state, action) => {
	return {
		...state,
		loading: true,
		error: null,
		message: []
	};
};

export const ioConnected = (state, action) => {
	return {
		...state,
		state: "User Connected",
		loading: false,
		error: null,
		message: []
	};
};

export const ioMessage = (state, { message }) => {
	return {
		...state,
		message
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
		state: "User Disconnected",
		loading: false,
		error: null,
		message: []
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
