import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Button,
	withStyles,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Menu,
	MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Favourite from "@material-ui/icons/Favorite";
import Lock from "@material-ui/icons/Lock";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBox from "@material-ui/icons/AccountBox";

import { authLogout } from "../../Store/actions/index";

const styles = {
	flex: {
		flex: 1
	},
	marginLeft: {
		marginLeft: ".2rem"
	}
};

class Header extends Component {
	state = {
		right: false,
		menuAnchor: null
	};

	openMenu = e => {
		this.setState({ menuAnchor: e.currentTarget });
	}

	closeMenu = () => {
		this.setState({ menuAnchor: null });
	}

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { title, classes, isMobile, isAuth, logout } = this.props;
		const { menuAnchor } = this.state;

		let barBtn = (
			<Fragment>
				<Button
					className={classes.marginLeft}
					variant="flat"
					component={NavLink}
					to="/user/login"
				>
					Login
				</Button>
				<Button
					className={classes.marginLeft}
					variant="raised"
					component={NavLink}
					to="/user/signup"
					color="primary"
				>
					Signup
				</Button>
			</Fragment>
		);

		let drawerBtn = (
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
			drawerBtn = (
				<Fragment>
					<ListItem button onClick={logout}>
						<ListItemIcon>
							<Lock color="primary" />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</ListItem>
				</Fragment>
			);

			barBtn = (
				<Fragment>
					<IconButton
						onClick={this.openMenu}
						color="inherit"
						aria-label="Menu"
					>
						<AccountCircle color="primary" />
					</IconButton>
					<Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={this.closeMenu}>
						<MenuItem component={NavLink} to="/user/profile">
							<ListItemIcon>
								<AccountBox color="primary" />
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

		if (isMobile) {
			barBtn = (
				<Fragment>
					<IconButton
						onClick={this.toggleDrawer("right", true)}
						color="inherit"
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<AppBar position="static" color="default">
					<Toolbar>
						<Typography
							variant="title"
							color="inherit"
							className={classes.flex}
						>
							{title}
						</Typography>
						{barBtn}
					</Toolbar>
				</AppBar>
				<Drawer
					anchor="right"
					open={this.state.right}
					onClose={this.toggleDrawer("right", false)}
					transitionDuration={250}
				>
					<List component="nav">{drawerBtn}</List>
				</Drawer>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		isMobile: state.common.isMobile,
		isAuth: state.auth.token ? true : false
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(authLogout())
	};
};

export default withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(Header)
);
