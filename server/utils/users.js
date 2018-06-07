class Users {
	constructor() {
		this.users = [];
	}

	addUser(user) {
		const u = { ...user, joinedAt: new Date() };
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
		const users = this.users.filter(u => u.room === room);
		return users;
	}
}

module.exports = { Users };
