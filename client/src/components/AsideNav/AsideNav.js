import React, { Component } from "react";

import { withStyles, Drawer } from "@material-ui/core";

import NavList from "../NavList/NavList";

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
				<NavList />
			</Drawer>
		);
	}
}

export default withStyles(styles)(AsideNav);
