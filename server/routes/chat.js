const { Users } = require("../utils/users");
const { Messages } = require("../utils/messages");
const { Rooms } = require("../utils/rooms");

const USERS = new Users();
const MESSAGES = new Messages();
const ROOMS = new Rooms();

const chat = io => {
	io.on("connection", client => {
		console.log(`Client is up: ${client.id}`);
		onJoin(client, io);
		onNewMessage(client, io);
	});
};

const onJoin = (client, io) => {
	client.on("join", ({ name, email, room }, callback) => {
		console.log(`User Connected: ${name}`);
		joinRoom(room, { name, email }, client, io);
		newMessage(room, io);
		callback(null, USERS.users);

		/* NOTE ======
		* you can also call client.on('disconnection') above at io.on('connection')
		* reason for calling here it to get reference of room name
		*/
		onDisconnect(room, client, io);
	});
};

const onNewMessage = (client, io) => {
	client.on("createMessage", ({ room, data }, callback) => {
		MESSAGES.addMessage(room, data);
		newMessage(room, io);
	});
};

const onDisconnect = (room, client, io) => {
	client.on("disconnect", reason => {
		const U = USERS.removeUser(room, client.id);

		if (U) {
			updatedUsers(room, io);
		}
		if (!USERS.users[room].length) {
			delete MESSAGES.messages[room];
			ROOMS.remove(room);
			updatedRooms(io);
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
	ROOMS.add(room);
	updatedRooms(io);
	USERS.addUser(room, { user, id: client.id });
	updatedUsers(room, io);
};

const updatedRooms = io => {
	io.emit("updatedRooms", ROOMS.rooms);
};
module.exports = chat;
