import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

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
								<NavLink to="/user/profile">
									Go to Profile
								</NavLink>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default Dashboard;
