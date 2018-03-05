class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
    return user;
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
    // const names = users.map(u => u.name);
    return users;
  }
}

module.exports = { Users };
