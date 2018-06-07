import socketIO from "socket.io-client";
import {
	IO_START,
	IO_CONNECTED,
	IO_MESSAGE,
	IO_FAIL,
	IO_DISCONNECTED
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

export const onConnect = user => {
	return dispatch => {
		io.on("connect", () => {
			dispatch(ioStart());
			io.emit("join", user, (error, data) => {
				if (error) {
					dispatch(ioFail(error));
				} else {
					dispatch(ioConnected());
				}
			});
		});
	};
};

export const onCreateMessage = message => {
	io.emit("createMessage", {
		...message
	});
};

export const onNewMessage = () => {
	return dispatch => {
		io.on("newMessage", msg => {
			return dispatch(ioMessage(msg));
		});
	};
};

export const onDisconnect = () => {
	return dispatch => {
		io.disconnect();
		dispatch(ioDisconnected());
	};
};
