import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography, Button } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";

class Header extends Component {
	render() {
		return (
			<Fragment>
				<AppBar position="static" color="default">
					<Toolbar>
						<IconButton color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit">
							Title
						</Typography>
						<Button
							variant="flat"
							component={NavLink}
							to="/user/login"
						>
							Login
						</Button>
						<Button
							variant="raised"
							component={NavLink}
							to="/user/signup"
							color="primary"
						>
							Signup
						</Button>
					</Toolbar>
				</AppBar>
			</Fragment>
		);
	}
}

export default Header;
