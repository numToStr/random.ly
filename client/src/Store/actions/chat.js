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

export const ioMessage = message => {
	return {
		type: IO_MESSAGE,
		message
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
	console.log(user);
	return dispatch => {
		io.on("connect", () => {
			console.log("connected");
			// onJoin(user);
		});
	};
};

export const onJoin = user => {
	return dispatch => {
		io.emit("join", user, (error, data) => {
			if (error) {
				dispatch(ioFail(error));
			} else {
				dispatch(ioConnected());
			}
		});
	};
};

export const onCreateMessage = msg => {
	io.emit("createMessage", {
		text: msg
	});
	onNewMessage();
};

export const onNewMessage = () => {
	return dispatch => {
		io.on("newMessage", msg => dispatch(ioMessage(msg)));
	};
};
