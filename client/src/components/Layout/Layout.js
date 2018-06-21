import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, withStyles, Hidden } from "@material-ui/core";
import { asyncComponent } from "react-async-component";

import Header from "../../components/Header/Header";
const MobileDrawer = asyncComponent({
	resolve: () => import("../MobileDrawer/MobileDrawer")
});

class Layout extends Component {
	state = {
		left: false
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};
	render() {
		const { toggleDrawer } = this;
		const { children, isAuth, location, user, ioUsers } = this.props;
		const { left } = this.state;

		return (
			<Fragment>
				<Grid container className="layout">
					<Grid item xs={12} className="layout-column">
						<Header
							isAuth={isAuth}
							toggleDrawer={toggleDrawer}
							location={location}
						/>
						<Hidden mdUp>
							<MobileDrawer
								toggleDrawer={toggleDrawer}
								drawerAnchor={left}
								isAuth={isAuth}
								user={user}
								ioUsers={ioUsers}
							/>
						</Hidden>
					</Grid>
					<Grid item xs={12} className="layout-column flex-grow">
						{children}
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.user.id ? true : false,
		user: state.auth.user,
		ioUsers: state.io.users
	};
};

export default withRouter(connect(mapStateToProps)(withStyles()(Layout)));
