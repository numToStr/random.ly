import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Button,
	withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { isMobile } from "../../Store/helper/helper";
import Logo from "../Images/Logo/RandomLyFull";

const styles = {
	flex: {
		flex: 1
	},
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
	},
	white: {
		background: "#fff"
	}
};

const header = ({
	classes: { white, flex, flexDesktop, flexMobile },
	isAuth,
	toggleDrawer,
	location: { pathname, search }
}) => {
	let mobileMenuIcon = null;
	let barBtn = null;

	if (isMobile) {
		mobileMenuIcon = (
			<Fragment>
				<IconButton
					onClick={toggleDrawer("left", true)}
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
					root: white
				}}
			>
				<Toolbar disableGutters={isMobile ? true : false}>
					{mobileMenuIcon}
					<Typography
						variant="title"
						color="inherit"
						className={
							isMobile
								? flexMobile
								: pathname === "/"
									? flex
									: flexDesktop
						}
					>
						<NavLink
							to={{
								pathname,
								search
							}}
							style={{
								lineHeight: 0
							}}
						>
							<Logo width={isMobile ? 100 : 110} />
						</NavLink>
					</Typography>
					{barBtn}
				</Toolbar>
			</AppBar>
		</Fragment>
	);
};

export default withStyles(styles)(header);
