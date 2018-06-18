import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Favourite from "@material-ui/icons/Favorite";
import PermIdentity from "@material-ui/icons/PermIdentity";
import {
	ListItem,
	ListItemText,
	ListItemIcon,
	List,
	withStyles
} from "@material-ui/core";

const styles = theme => ({
	heart: {
		color: theme.palette.error.main
	}
});

const AuthLinks = ({ classes: { heart } }) => {
	return (
		<Fragment>
			<List component="nav">
				<ListItem button component={NavLink} to="/user/signup">
					<ListItemIcon>
						<Favourite className={heart} />
					</ListItemIcon>
					<ListItemText primary="Signup" />
				</ListItem>
				<ListItem button component={NavLink} to="/user/login">
					<ListItemIcon>
						<PermIdentity color="primary" />
					</ListItemIcon>
					<ListItemText primary="Login" />
				</ListItem>
			</List>
		</Fragment>
	);
};

export default withStyles(styles)(AuthLinks);
