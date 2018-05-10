import React, { Component, Fragment } from "react";
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
	ListItemIcon
} from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

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
		right: false
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { title, classes } = this.props;
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
						<IconButton
							onClick={this.toggleDrawer("right", true)}
							color="inherit"
							aria-label="Menu"
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer
					anchor="right"
					open={this.state.right}
					onClose={this.toggleDrawer("right", false)}
					transitionDuration={250}
				>
					<List component="nav">
						<ListItem button>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Signup" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText primary="Login" />
						</ListItem>
					</List>
				</Drawer>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Header);
