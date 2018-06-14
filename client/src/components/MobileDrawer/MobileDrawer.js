import React from "react";
import { Drawer } from "@material-ui/core";
import UserList from "../NavList/UserList/UserList";
import AuthLinks from "../Links/AuthLinks";

const MobileDrawer = props => {
	const { drawerAnchor, toggleDrawer, isAuth } = props;
	return (
		<Drawer
			anchor="left"
			open={drawerAnchor}
			onClose={toggleDrawer("left", false)}
			transitionDuration={250}
		>
			{isAuth ? <UserList /> : <AuthLinks />}
		</Drawer>
	);
};

export default MobileDrawer;
