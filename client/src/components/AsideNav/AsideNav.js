import React from "react";
import { withStyles, Drawer } from "@material-ui/core";

const styles = theme => ({
	drawerPaper: {
		position: "relative",
		height: "100% !important",
		width: "100%"
	}
});

const asideNav = ({ classes, side, children }) => {
	return (
		<Drawer
			variant="permanent"
			anchor={side}
			className="h-100"
			classes={{
				paper: classes.drawerPaper
			}}
		>
			{children}
		</Drawer>
	);
};

export default withStyles(styles)(asideNav);
