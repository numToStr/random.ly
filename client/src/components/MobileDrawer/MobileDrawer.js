import React from "react";
import { Drawer } from "@material-ui/core";
import NavList from "../NavList/NavList";

const MobileDrawer = props => {
	const { drawerAnchor, toggleDrawer } = props;
	return (
		<Drawer
			anchor="left"
			open={drawerAnchor}
			onClose={toggleDrawer("left", false)}
			transitionDuration={250}
		>
			<NavList />
		</Drawer>
	);
};

export default MobileDrawer;
