import socketIO from "socket.io-client";
import {
	IO_START,
	IO_CONNECTED,
	IO_MESSAGE,
	IO_FAIL,
	IO_DISCONNECTED,
	IO_UPDATED_USERS,
	IO_UPDATED_ROOMS
} from "./actionTypes";

const io = socketIO();

export const ioStart = () => {
	return {
		type: IO_START
	};
};

export const ioConnected = () => {
	return {
		type: IO_CONNECTED
	};
};

export const ioMessage = messages => {
	return {
		type: IO_MESSAGE,
		messages
	};
};

export const ioUpdatedUsers = users => {
	return {
		type: IO_UPDATED_USERS,
		users
	};
};

export const ioUpdatedRooms = rooms => {
	return {
		type: IO_UPDATED_ROOMS,
		rooms
	};
};

export const ioFail = error => {
	return {
		type: IO_FAIL,
		error
	};
};

export const ioDisconnected = () => {
	return {
		type: IO_DISCONNECTED
	};
};

export const onConnect = () => {
	io.connect();
};

export const onJoin = user => {
	return dispatch => {
		dispatch(ioStart());
		io.emit("join", user, (error, users) => {
			if (error) {
				dispatch(ioFail(error));
			} else {
				dispatch(ioConnected());
			}
		});
	};
};

export const onLeave = user => {
	io.emit("leave", user);
};

export const onCreateMessage = (room, data) => {
	io.emit("createMessage", {
		room,
		data
	});
};

export const onNewMessage = () => {
	return dispatch => {
		io.on("newMessage", msg => {
			return dispatch(ioMessage(msg));
		});
	};
};

export const onUpdatedUsers = () => {
	return dispatch => {
		io.on("updatedUsers", users => {
			return dispatch(ioUpdatedUsers(users));
		});
	};
};

export const onUpdatedRooms = () => {
	return dispatch => {
		io.on("updatedRooms", rooms => {
			return dispatch(ioUpdatedRooms(rooms));
		});
	};
};

export const onDisconnect = () => {
	return dispatch => {
		io.disconnect();
		dispatch(ioDisconnected());
	};
};
