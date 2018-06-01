const chat = io => {
	io.on("connection", client => {
		onJoin(client);
	});
};

const onJoin = client => {
	client.on("join", (user, callback) => {
		console.log(`User Connected: ${user.name}`);
		callback();
	});
};

module.exports = chat;
