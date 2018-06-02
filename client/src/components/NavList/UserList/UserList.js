import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
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

import { authLogout } from "../../../Store/actions/index";

class UserList extends Component {
	state = {
		menuAnchor: null
	};
	openMenu = e => {
		this.setState({ menuAnchor: e.currentTarget });
	};

	closeMenu = () => {
		this.setState({ menuAnchor: null });
	};

	render() {
		const { logout, isAuth, userName } = this.props;
		const { openMenu, closeMenu } = this;
		const { menuAnchor } = this.state;

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
							className="mx-auto"
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

		return (
			<List component="nav" className="h-100">
				{links}
			</List>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.token ? true : false,
		userName: state.auth.user.name
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(authLogout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
