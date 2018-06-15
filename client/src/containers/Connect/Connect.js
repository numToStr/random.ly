import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Typography, Button, FormControl } from "@material-ui/core";
import RoomConnect from "../../components/Forms/RoomConnect/RoomConnect";
import FormLayout from "../../components/FormLayout/FormLayout";

class Connect extends Component {
	handleSubmit = value => {
		console.log(value);
	};

	render() {
		const { handleSubmit } = this;

		return (
			<FormLayout>
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
				<Typography variant="caption" color="secondary" align="center">
					--- You will be connected to default room ---
				</Typography>
			</FormLayout>
		);
	}
}

export default Connect;
