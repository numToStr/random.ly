import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
	ListItem,
	ListItemText,
	ListItemIcon,
	Menu,
	MenuItem,
	List,
	ListSubheader,
	ListItemSecondaryAction,
	IconButton,
	Typography
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarIcon from "@material-ui/icons/Star";

import { authLogout } from "../../../Store/actions/index";
import Users from "./Users/Users";

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
		const { logout, userName, ioUsers } = this.props;
		const { openMenu, closeMenu } = this;
		const { menuAnchor } = this.state;

		return (
			<Fragment>
				<List component="nav">
					<ListItem>
						<ListItemIcon>
							<StarIcon style={{ fontSize: 30 }} />
						</ListItemIcon>
						<ListItemText
							primary={
								<Typography variant="title" color="secondary">
									You
								</Typography>
							}
							disableTypography
							secondary={
								<Typography variant="caption">
									{userName}
								</Typography>
							}
						/>
						<ListItemSecondaryAction>
							<IconButton onClick={openMenu}>
								<MoreVertIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</List>
				<List
					component="nav"
					subheader={
						<ListSubheader>
							Connected Users ({ioUsers.length})
						</ListSubheader>
					}
				>
					<Users users={ioUsers} />
				</List>

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
}

const mapStateToProps = state => {
	return {
		userName: state.auth.user.name,
		ioUsers: state.io.users
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(authLogout())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
