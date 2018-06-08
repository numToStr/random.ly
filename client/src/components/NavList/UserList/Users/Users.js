import React from "react";
import User from "./User/User";

const Users = ({ users }) => {
	const U = users.map(user => <User key={user.id} user={user} />);

	return U;
};

export default Users;
