import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";

import Header from "../../components/Header/Header";

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Grid container>
					<Grid item xs={12}>
						<Header />
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="display3">
							{/* Chat with random peaple ... and make new friends */}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						two
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default Home;
