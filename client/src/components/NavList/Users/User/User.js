import React from "react";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from "@material-ui/core";
import { Face } from "@material-ui/icons";
import { format } from "date-fns";

const User = ({
	user: {
		user: { name },
		joinedAt
	}
}) => {
	return (
		<ListItem button>
			<ListItemIcon>
				<Face style={{ fontSize: 26 }} />
			</ListItemIcon>
			<ListItemText
				disableTypography
				primary={<Typography variant="subheading">{name}</Typography>}
				secondary={
					<Typography variant="caption">
						Joined @{" "}
						{format(new Date(joinedAt).toUTCString(), "hh:mm a")}
					</Typography>
				}
			/>
		</ListItem>
	);
};

export default User;
