import React from "react";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const User = ({ user }) => {
	return (
		<ListItem button>
			<ListItemIcon>
				<AccountCircle />
			</ListItemIcon>
			<ListItemText
				disableTypography
				primary={
					<Typography variant="subheading">
						{user.user.name}
					</Typography>
				}
				secondary={
					<Typography variant="caption">
						Joined @ {user.joinedAt}
					</Typography>
				}
			/>
		</ListItem>
	);
};

export default User;
