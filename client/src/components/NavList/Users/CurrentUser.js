import React, { Component, Fragment } from "react";
import {
	ListItem,
	ListItemText,
	ListItemIcon,
	Menu,
	MenuItem,
	List,
	ListItemSecondaryAction,
	IconButton,
	Typography,
	Tooltip,
	withStyles
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarIcon from "@material-ui/icons/Star";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";

const styles = ({ palette }) => {
	return {
		starIcon: {
			color: palette.primary.main,
			fontSize: 30
		}
	};
};

class CurrentUser extends Component {
	state = {
		menuAnchor: null,
		leave: false
	};

	openMenu = e => {
		this.setState({ menuAnchor: e.currentTarget });
	};

	closeMenu = () => {
		this.setState({ menuAnchor: null });
	};

	leaveRoom = () => {
		this.setState({ leave: true });
	};

	render() {
		const { openMenu, closeMenu, leaveRoom } = this;
		const {
			user: { name },
			classes: { starIcon }
		} = this.props;
		const { menuAnchor, leave } = this.state;

		if (leave) {
			return <Redirect to="/connect" />;
		}

		return (
			<Fragment>
				<List component="nav">
					<ListItem>
						<ListItemIcon>
							<StarIcon className={starIcon} />
						</ListItemIcon>
						<ListItemText
							primary={
								<Typography variant="title" color="primary">
									You
								</Typography>
							}
							disableTypography
							secondary={
								<Typography variant="caption">
									{name}
								</Typography>
							}
						/>
						<ListItemSecondaryAction>
							<Tooltip title="Menu" disableFocusListener>
								<IconButton onClick={openMenu}>
									<MoreVertIcon />
								</IconButton>
							</Tooltip>
						</ListItemSecondaryAction>
					</ListItem>
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
					<MenuItem onClick={leaveRoom}>
						<ListItemIcon>
							<KeyboardBackspace color="primary" />
						</ListItemIcon>
						<ListItemText primary="Exit" />
					</MenuItem>
				</Menu>
			</Fragment>
		);
	}
}

export default withStyles(styles)(CurrentUser);
