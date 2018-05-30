import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

import UserNav from "../../components/AsideNav/UserNav";
import Layout from "../../components/Layout/Layout";
import { isMobile } from "../../Store/helper/helper";

class Dashboard extends Component {
	render() {
		let asideNav = null;
		if (!isMobile) {
			asideNav = (
				<Grid item xs={2}>
					<UserNav />
				</Grid>
			);
		}

		return (
			<Grid container className="h-100">
				{asideNav}
				<Grid item xs={isMobile ? 12 : 10}>
					<Layout>
						<Typography align="center" variant="display3">
							Chat
						</Typography>
					</Layout>
				</Grid>
			</Grid>
		);
	}
}

export default Dashboard;
