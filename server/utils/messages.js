const { format } = require("date-fns");

class Messages {
	constructor() {
		this.messages = {};
	}

	addMessage(room, data) {
		data.createdAt = format(new Date(), "hh:mm a");
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
