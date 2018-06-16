import {
	IO_START,
	IO_CONNECTED,
	IO_MESSAGE,
	IO_FAIL,
	IO_DISCONNECTED,
	IO_UPDATED_USERS,
	IO_UPDATED_ROOMS,
	IO_JOIN,
	IO_LEAVE
} from "../actions/actionTypes";

const initState = {
	status: null,
	loading: false,
	error: null,
	user: null,
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

const ioConnected = (state, action) => {
	return {
		...state,
		status: "connect",
		loading: false,
		error: null,
		user: null
	};
};

const ioJoin = (state, { user }) => {
	return {
		...state,
		status: "join",
		loading: false,
		error: null,
		user
	};
};

const ioLeave = (state, action) => {
	return {
		...state,
		status: "leave",
		loading: false,
		error: null,
		user: null
	};
};

const ioMessage = (state, { messages }) => {
	return {
		...state,
		messages
	};
};

const ioUpdatedUsers = (state, { users }) => {
	return {
		...state,
		users
	};
};

const ioUpdatedRooms = (state, { rooms }) => {
	return {
		...state,
		rooms
	};
};

const ioFail = (state, { error }) => {
	return {
		...state,
		error
	};
};

const ioDisconnected = (state, action) => {
	return {
		...state,
		status: "disconnect",
		loading: false,
		error: null,
		user: null,
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
		case IO_JOIN:
			return ioJoin(state, action);
		case IO_LEAVE:
			return ioLeave(state, action);
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
