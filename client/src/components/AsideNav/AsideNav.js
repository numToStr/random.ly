import React from "react";

import { withStyles, Drawer } from "@material-ui/core";

import NavList from "../NavList/NavList";

const styles = theme => ({
	drawerPaper: {
		position: "relative",
		height: "100% !important"
	}
});

const asideNav = props => {
	const { classes } = props;
	return (
		<Drawer
			variant="permanent"
			anchor="left"
			className="h-100"
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<NavList />
		</Drawer>
	);
};

export default withStyles(styles)(asideNav);
