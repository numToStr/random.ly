import React, { Component } from "react";

import {
	withStyles,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const styles = theme => ({
	drawerPaper: {
		position: "relative"
	}
});

class AsideNav extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Drawer
				variant="permanent"
				anchor="left"
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<List component="nav">
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary="Drafts" />
					</ListItem>
				</List>
			</Drawer>
		);
	}
}

export default withStyles(styles)(AsideNav);
