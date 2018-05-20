import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";

import Header from "../../components/Header/Header";
import Aside from "../../components/AsideNav/AsideNav";

class Dashboard extends Component {
	render() {
		return (
			<Fragment>
				<Grid container className="h-100">
					<Grid item xs={12}>
						<Header title="randomly" />
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							<Grid item xs={12} md={3}>
								<Aside />
							</Grid>
							<Grid item xs={12} md={9}>
								<Typography>Dashboard</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default Dashboard;
