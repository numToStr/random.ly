class Users {
	constructor() {
		this.users = {};
	}

	addUser(room, user) {
		const u = {
			...user,
			joinedAt: new Date().toUTCString()
		};

		if (!this.users[room]) {
			this.users[room] = [u];
		} else {
			this.users[room].push(u);
		}
		return u;
	}

	removeUser(room, id) {
		const user = this.getUser(room, id);
		if (user) {
			this.users[room] = this.users[room].filter(u => u.id !== id);
		}
		return user;
	}

	getUser(room, id) {
		let user = [];
		if (this.users[room]) {
			user = this.users[room].filter(u => u.id === id)[0];
		}
		return user;
	}

	getUserList(room) {
		return this.users[room];
	}
}

module.exports = { Users };
