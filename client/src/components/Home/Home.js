import React, { Component, Fragment } from "react";
import { Grid } from "material-ui";

import Header from "../Header/Header";

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Grid container>
					<Grid item xs={12}>
						<Header title="random.ly" />
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default Home;
