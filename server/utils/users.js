const { format } = require("date-fns");

class Users {
	constructor() {
		this.users = [];
	}

	addUser(user) {
		const u = { ...user, joinedAt: format(new Date(), "hh:mm a") };
		this.users.push(u);
		return u;
	}

	removeUser(id) {
		const user = this.getUser(id);
		if (user) {
			this.users = this.users.filter(u => u.id !== id);
		}
		return user;
	}

	getUser(id) {
		const user = this.users.filter(u => u.id === id)[0];
		return user;
	}

	getUserList(room) {
		const users = this.users.filter(({ user }) => user.room === room);
		return users;
	}
}

module.exports = { Users };
