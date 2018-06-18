import React from "react";
import User from "./User/User";
import { List, ListSubheader } from "@material-ui/core";

const Users = ({ users }) => {
	const U = users.map(user => <User key={user.id} user={user} />);

	return (
		<List
			component="nav"
			subheader={
				<ListSubheader>Connected Users ({users.length})</ListSubheader>
			}
		>
			{U}
		</List>
	);
};

export default Users;
