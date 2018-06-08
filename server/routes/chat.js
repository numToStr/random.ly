const { Users } = require("../utils/users");
const { Messages } = require("../utils/messages");

const USERS = new Users();
const MESSAGES = new Messages();

const chat = io => {
	io.on("connection", client => {
		onJoin(client);
		onNewMessage(client, io);
		onDisconnect(client);
	});
};

const onJoin = client => {
	client.on("join", (user, callback) => {
		console.log(`User Connected: ${user.name}`);
		USERS.addUser({ user, id: client.id });
		callback();
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

const onDisconnect = client => {
	client.on("disconnect", () => {
		client.disconnect(true);
		console.log("User Disconnected");
	});
};

module.exports = chat;
