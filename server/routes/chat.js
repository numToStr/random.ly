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
	client.on("join", (user, callback) => {
		console.log(`User Connected: ${user.name}`);
		joinRoom(user, client, io);
		newMessage(io);
		callback(null, USERS.users);
	});
};

const onNewMessage = (client, io) => {
	client.on("createMessage", (msg, callback) => {
		MESSAGES.addMessage(msg);
		newMessage(io);
		// const user = users.getUser(client.id);

		// if (user && isRealString(msg.text)) {
		// 	io
		// 		.in(user.room)
		// 		.emit("newMessage", generateMsg(user.name, msg.text));
		// }
	});
};

const onDisconnect = (client, io) => {
	client.on("disconnect", () => {
		const u = USERS.removeUser(client.id);
		if (u) {
			updatedUsers(u, io);
		}
		if (!USERS.users.length) {
			MESSAGES.messages = [];
		}
		client.disconnect(true);
		console.log("User Disconnected");
	});
};

const updatedUsers = ({ room }, io) => {
	const U = USERS.getUserList(room);
	io.in(room).emit("updatedUsers", U);
};

const newMessage = io => {
	io.emit("newMessage", MESSAGES.messages);
};

const joinRoom = (user, client, io) => {
	client.join(user.room);
	USERS.addUser({ user, id: client.id });
	updatedUsers(user, io);
};

module.exports = chat;
