import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Typography, Button, FormControl } from "@material-ui/core";
import Logo from "../../components/Images/Logo/RandomLyFull";
import RoomConnect from "../../components/Forms/RoomConnect/RoomConnect";

class Connect extends Component {
	handleSubmit = value => {
		console.log(value);
	};

	render() {
		const { handleSubmit } = this;

		return (
			<Fragment>
				<Grid container justify="center" className="pt-5">
					<Grid item xs={9} sm={5} md={3} className="mt-5">
						<Typography align="center" paragraph>
							<Logo width={180} />
						</Typography>
						<RoomConnect onSubmit={handleSubmit} />
						<FormControl margin="normal" fullWidth>
							<Typography
								variant="subheading"
								color="textSecondary"
								align="center"
							>
								or
							</Typography>
						</FormControl>
						<Typography align="center" paragraph>
							<Button
								variant="raised"
								color="primary"
								fullWidth
								component={NavLink}
								to={{
									pathname: "/chat",
									search: "?room=anonymous"
								}}
							>
								Connect
							</Button>
						</Typography>
						<Typography
							variant="caption"
							color="secondary"
							align="center"
						>
							--- You will be connected to default room ---
						</Typography>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default Connect;
