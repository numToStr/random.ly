import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const User = ({ user }) => {
	return (
		<ListItem button>
			<ListItemIcon>
				<AccountCircle />
			</ListItemIcon>
			<ListItemText
				primary={user.user.name}
				secondary={`Joined: ${user.joinedAt}`}
			/>
		</ListItem>
	);
};

export default User;
