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
		callback();
	});
};

const onNewMessage = (client, io) => {
	let messages = {
		current: null,
		all: []
	};
	client.on("createMessage", (msg, callback) => {
		console.log(msg);
		messages.current = msg.message;
		messages.all.push(msg);

		io.emit("newMessage", messages);
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
