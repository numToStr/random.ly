import socketIO from "socket.io-client";
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

export const ioJoin = user => {
	return {
		type: IO_JOIN,
		user
	};
};

export const ioLeave = () => {
	return {
		type: IO_LEAVE
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
	return dispatch => {
		dispatch(ioStart());
		io.connect();
		dispatch(ioConnected());
	};
};

export const onJoin = user => {
	return dispatch => {
		dispatch(ioStart());
		io.emit("join", user, (error, users) => {
			if (error) {
				dispatch(ioFail(error));
			} else {
				dispatch(ioJoin(user));
			}
		});
	};
};

export const onLeave = user => {
	return dispatch => {
		// dispatch(ioStart()); /* not calling start bcz connect form button showing loader */
		io.emit("leave", user, (error, users) => {
			if (error) {
				dispatch(ioFail(error));
			} else {
				dispatch(ioLeave());
			}
		});
	};
};

export const onCreateMessage = (room, data) => {
	io.emit("createMessage", {
		room,
		data
	});
};

export const onNewMessage = cb => {
	return dispatch => {
		io.on("newMessage", msg => {
			dispatch(ioMessage(msg));
			if (cb) {
				cb();
			}
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
