import React from "react";
import { Drawer } from "@material-ui/core";
import UserList from "../NavList/UserList";

const MobileDrawer = props => {
	const { drawerAnchor, toggleDrawer } = props;
	return (
		<Drawer
			anchor="left"
			open={drawerAnchor}
			onClose={toggleDrawer("left", false)}
			transitionDuration={250}
		>
			<UserList />
		</Drawer>
	);
};

export default MobileDrawer;
