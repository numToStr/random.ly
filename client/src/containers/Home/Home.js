import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<Grid container>
						<Grid item xs={12} md={6}>
							<Typography variant="display3">Home</Typography>
						</Grid>
					</Grid>
				</Layout>
			</Fragment>
		);
	}
}

export default Home;
