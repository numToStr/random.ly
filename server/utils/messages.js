class Messages {
	constructor() {
		this.messages = [];
	}

	addMessage(msg) {
		msg.createdAt = new Date();
		this.messages.push(msg);
	}
}

module.exports = { Messages };
