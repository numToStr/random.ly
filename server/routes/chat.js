const { Users } = require("../utils/users");
const { Messages } = require("../utils/messages");

const USERS = new Users();
const MESSAGES = new Messages();

const chat = io => {
	io.on("connection", client => {
		onJoin(client, io);
		onNewMessage(client, io);
		onDisconnect(client, io);
	});
};

const onJoin = (client, io) => {
	client.on("join", ({ name, email, room }, callback) => {
		console.log(`User Connected: ${name}`);
		joinRoom(room, { name, email }, client, io);
		newMessage(room, io);
		callback(null, USERS.users);
	});
};

const onNewMessage = (client, io) => {
	client.on("createMessage", ({ room, data }, callback) => {
		MESSAGES.addMessage(room, data);
		newMessage(room, io);
	});
};

const onDisconnect = (client, io) => {
	client.on("disconnectUser", room => {
		const U = USERS.removeUser(room, client.id);
		if (U) {
			updatedUsers(room, io);
		}
		if (!USERS.users.length) {
			MESSAGES.messages = [];
		}

		client.disconnect(true);
		console.log("User Disconnected");
	});
};

const updatedUsers = (room, io) => {
	const U = USERS.getUserList(room);
	io.in(room).emit("updatedUsers", U);
};

const newMessage = (room, io) => {
	const M = MESSAGES.getMessageList(room);
	io.in(room).emit("newMessage", M);
};

const joinRoom = (room, user, client, io) => {
	client.join(room);
	USERS.addUser(room, { user, id: client.id });
	updatedUsers(room, io);
};

module.exports = chat;
