import {
	IO_START,
	IO_CONNECTED,
	IO_MESSAGE,
	IO_FAIL,
	IO_DISCONNECTED,
	IO_UPDATED_USERS,
	IO_UPDATED_ROOMS
} from "../actions/actionTypes";

const initState = {
	status: null,
	loading: false,
	error: null,
	messages: [],
	users: [],
	rooms: []
};

const ioStart = (state, action) => {
	return {
		...state,
		loading: true,
		error: null,
		messages: []
	};
};

export const ioConnected = (state, action) => {
	return {
		...state,
		status: "User Connected",
		loading: false,
		error: null
	};
};

export const ioMessage = (state, { messages }) => {
	return {
		...state,
		messages
	};
};

export const ioUpdatedUsers = (state, { users }) => {
	return {
		...state,
		users
	};
};

export const ioUpdatedRooms = (state, { rooms }) => {
	return {
		...state,
		rooms
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
		messages: [],
		users: []
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
		case IO_UPDATED_USERS:
			return ioUpdatedUsers(state, action);
		case IO_UPDATED_ROOMS:
			return ioUpdatedRooms(state, action);
		case IO_FAIL:
			return ioFail(state, action);
		case IO_DISCONNECTED:
			return ioDisconnected(state, action);
		default:
			return state;
	}
};

export default reducer;
