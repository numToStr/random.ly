class Messages {
	constructor() {
		this.messages = {
			current: null,
			all: []
		};
	}

	addMessage(msg, id) {
		msg.user.id = id;
		msg.createdAt = new Date();
		this.messages.current = msg.message;
		this.messages.all.push(msg);
	}
}

module.exports = { Messages };
