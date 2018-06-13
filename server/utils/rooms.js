class Rooms {
	constructor() {
		this.rooms = [];
	}

	add(room) {
		const R = { room, link: { path: "/chat", query: `?room=${room}` } };
		const _R = this.rooms.filter(r => r.room == room);
		if (!_R.length) {
			this.rooms.push(R);
		}
	}

	remove(room) {
		this.rooms = this.rooms.filter(r => r.room !== room);
	}
}

module.exports = { Rooms };
