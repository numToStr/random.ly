const { format } = require("date-fns");

class Messages {
	constructor() {
		this.messages = [];
	}

	addMessage(msg) {
		msg.createdAt = format(new Date(), "hh:mm a");
		this.messages.push(msg);
	}
}

module.exports = { Messages };
