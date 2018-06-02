const chat = io => {
	io.on("connection", client => {
		onJoin(client);
		onNewMessage(client, io);
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

module.exports = chat;
