import React, { Fragment } from "react";
import { Drawer } from "@material-ui/core";

import AuthLinks from "../Links/AuthLinks";
import CurrentUser from "../NavList/Users/CurrentUser";
import Users from "../NavList/Users/Users";

const MobileDrawer = ({
	drawerAnchor,
	user,
	ioUsers,
	toggleDrawer,
	isAuth
}) => {
	return (
		<Drawer
			anchor="left"
			open={drawerAnchor}
			onClose={toggleDrawer("left", false)}
			transitionDuration={250}
		>
			{isAuth ? (
				<Fragment>
					<CurrentUser user={user} />
					<Users users={ioUsers} />
				</Fragment>
			) : (
				<AuthLinks />
			)}
		</Drawer>
	);
};

export default MobileDrawer;
