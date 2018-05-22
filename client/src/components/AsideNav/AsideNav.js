import React from "react";

import { withStyles, Drawer } from "@material-ui/core";

import NavList from "../NavList/NavList";

const styles = theme => ({
	drawerPaper: {
		position: "relative"
	}
});

const asideNav = props => {
	const { classes } = props;
	return (
		<Drawer
			variant="permanent"
			anchor="left"
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<NavList />
		</Drawer>
	);
};

export default withStyles(styles)(asideNav);
