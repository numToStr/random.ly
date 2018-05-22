import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
	ListItem,
	ListItemText,
	ListItemIcon,
	Chip,
	Avatar,
	Menu,
	MenuItem,
	List
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";
import Favourite from "@material-ui/icons/Favorite";
import Lock from "@material-ui/icons/Lock";

const NavList = props => {
	const { logout, isAuth, userName, openMenu, closeMenu, menuAnchor } = props;

	let links = (
		<Fragment>
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
		</Fragment>
	);

	if (isAuth) {
		links = (
			<Fragment>
				<ListItem>
					<Chip
						avatar={
							<Avatar className="bg-transparent">
								<AccountCircle
									color="primary"
									style={{
										height: "1.3em",
										width: "1.3em"
									}}
								/>
							</Avatar>
						}
						label={userName}
						classes={{
							label: "pl-2"
						}}
						onClick={openMenu}
					/>
				</ListItem>

				<Menu
					anchorEl={menuAnchor}
					open={Boolean(menuAnchor)}
					onClose={closeMenu}
				>
					<MenuItem component={NavLink} to="/user/profile">
						<ListItemIcon>
							<AccountCircle color="primary" />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</MenuItem>
					<MenuItem onClick={logout}>
						<ListItemIcon>
							<Lock color="primary" />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</MenuItem>
				</Menu>
			</Fragment>
		);
	}

	return <List component="nav">{links}</List>;
};

export default NavList;
