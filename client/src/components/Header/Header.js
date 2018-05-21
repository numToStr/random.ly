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
	List
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import NavList from "../NavList/NavList";
import { isMobile } from "../../Store/helper/helper";
import { authLogout } from "../../Store/actions/index";
import Logo from "../Logo/RandomLyFull";

const styles = {
	flexDesktop: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	flexMobile: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		paddingRight: "2.5rem"
	}
};

class Header extends Component {
	state = {
		left: false,
		menuAnchor: null
	};

	openMenu = e => {
		this.setState({ menuAnchor: e.currentTarget });
	};

	closeMenu = () => {
		this.setState({ menuAnchor: null });
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { classes, isAuth, logout, userName } = this.props;
		const { menuAnchor } = this.state;

		let mobileMenuIcon = null;
		let barBtn = null;

		if (isMobile) {
			mobileMenuIcon = (
				<Fragment>
					<IconButton
						onClick={this.toggleDrawer("left", true)}
						color="inherit"
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
				</Fragment>
			);
		} else {
			barBtn = (
				<Fragment>
					<Button
						className="ml-1"
						variant="flat"
						component={NavLink}
						to="/user/login"
					>
						Login
					</Button>
					<Button
						className="ml-1"
						variant="raised"
						component={NavLink}
						to="/user/signup"
						color="primary"
					>
						Signup
					</Button>
				</Fragment>
			);
		}

		if (isAuth) {
			barBtn = null;
		}

		return (
			<Fragment>
				<AppBar
					position="static"
					color="default"
					classes={{
						colorDefault: "bg-white"
					}}
				>
					<Toolbar disableGutters={isMobile ? true : false}>
						{mobileMenuIcon}
						<Typography
							variant="title"
							color="inherit"
							className={
								isMobile
									? classes.flexMobile
									: classes.flexDesktop
							}
						>
							<NavLink
								to="/"
								style={{
									lineHeight: 0
								}}
							>
								<Logo width={isMobile ? "6rem" : "7rem"} />
							</NavLink>
						</Typography>
						{barBtn}
					</Toolbar>
				</AppBar>
				<Drawer
					anchor="left"
					open={this.state.left}
					onClose={this.toggleDrawer("left", false)}
					transitionDuration={250}
				>
					<List component="nav">
						<NavList
							isMobile={isMobile}
							isAuth={isAuth}
							logout={logout}
							userName={userName}
							openMenu={this.openMenu}
							closeMenu={this.closeMenu}
							menuAnchor={menuAnchor}
						/>
					</List>
				</Drawer>
			</Fragment>
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

export default withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(Header)
);
