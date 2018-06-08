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
		USERS.addUser({ user, id: client.id });
		updatedUsers(io);
		callback(null, USERS.users);
	});
};

const onNewMessage = (client, io) => {
	client.on("createMessage", (msg, callback) => {
		MESSAGES.addMessage(msg);
		io.emit("newMessage", MESSAGES.messages);

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
			updatedUsers(io);
		}
		client.disconnect(true);
		console.log("User Disconnected");
	});
};

const updatedUsers = io => {
	io.emit("updatedUsers", USERS.users);
};

module.exports = chat;
