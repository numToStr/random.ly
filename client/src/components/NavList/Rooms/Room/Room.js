import React from "react";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Home } from "@material-ui/icons";

const Room = ({ room: { room, link } }) => {
	return (
		<ListItem
			button
			component={NavLink}
			to={{
				pathname: link.path,
				search: link.query
			}}
		>
			<ListItemIcon>
				<Home style={{ fontSize: 26 }} />
			</ListItemIcon>
			<ListItemText
				disableTypography
				primary={<Typography variant="subheading">{room}</Typography>}
				secondary={
					<Typography variant="caption">Dummy Text</Typography>
				}
			/>
		</ListItem>
	);
};

export default Room;
