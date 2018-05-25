import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

import Aside from "../../components/AsideNav/AsideNav";
import Layout from "../../components/Layout/Layout";
import { isMobile } from "../../Store/helper/helper";

class Dashboard extends Component {
	render() {
		let asideNav = null;
		if (!isMobile) {
			asideNav = (
				<Grid item xs={3}>
					<Aside />
				</Grid>
			);
		}

		return (
			<Layout>
				<Grid container className="h-100">
					{asideNav}
					<Grid item xs={isMobile ? 12 : 9}>
						<Typography>Dashboard</Typography>
					</Grid>
				</Grid>
			</Layout>
		);
	}
}

export default Dashboard;
