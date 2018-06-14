import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Favourite from "@material-ui/icons/Favorite";
import Lock from "@material-ui/icons/Lock";
import { ListItem, ListItemText, ListItemIcon, List } from "@material-ui/core";

const AuthLinks = () => {
	return (
		<Fragment>
			<List component="nav">
				<ListItem button component={NavLink} to="/user/signup">
					<ListItemIcon>
						<Favourite color="primary" />
					</ListItemIcon>
					<ListItemText primary="Signup" />
				</ListItem>
				<ListItem button component={NavLink} to="/user/login">
					<ListItemIcon>
						<Lock color="primary" />
					</ListItemIcon>
					<ListItemText primary="Login" />
				</ListItem>
			</List>
		</Fragment>
	);
};

export default AuthLinks;
