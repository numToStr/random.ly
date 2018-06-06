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
	}
};

const header = props => {
	const { classes, isAuth, toggleDrawer, path } = props;

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
								: path === "/"
									? classes.flex
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
		</Fragment>
	);
};

export default withStyles(styles)(header);
