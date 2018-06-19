class Messages {
	constructor() {
		this.messages = {};
	}

	addMessage(room, data) {
		data.createdAt = new Date().toUTCString();

		if (!this.messages[room]) {
			this.messages[room] = [data];
		} else {
			this.messages[room].push(data);
		}
	}

	getMessageList(room) {
		return this.messages[room] ? this.messages[room] : [];
	}
}

module.exports = { Messages };
