import React, { Component, Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import Logo from "../../components/Images/Logo/RandomLyFull";

class Connect extends Component {
	render() {
		return (
			<Fragment>
				<Grid container>
					<Grid item xs={12} className="pt-5">
						<Typography align="center">
							<Logo width={200} />
						</Typography>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default Connect;
