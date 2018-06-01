const chat = io => {
	io.on("connection", client => {
		onJoin(client);
	});
};

const onJoin = client => {
	console.log("New User Connected.");
};

module.exports = chat;
