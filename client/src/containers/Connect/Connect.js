import React, { Component, Fragment } from "react";
import { Form, Field } from "redux-form";
import {
	Grid,
	Typography,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormHelperText
} from "@material-ui/core";
import Logo from "../../components/Images/Logo/RandomLyFull";
import reduxForm from "redux-form/lib/reduxForm";

class Connect extends Component {
	state = {
		age: ""
	};

	inputField = props => (
		<TextField
			InputLabelProps={{
				shrink: true
			}}
			margin="normal"
			fullWidth
			{...props}
		/>
	);

	handleSubmit = value => {
		console.log(value);
	};

	handleChange = event => {
		this.setState({ age: event.target.value });
	};

	render() {
		const { inputField, handleSubmit, handleChange } = this;

		return (
			<Fragment>
				<Grid container>
					<Grid item xs={12} className="pt-5">
						<Typography align="center">
							<Logo width={200} />
						</Typography>
					</Grid>
				</Grid>
				<Grid container justify="space-around">
					<Grid item xs={12} md={3}>
						<Typography
							variant="headline"
							color="secondary"
							align="center"
						>
							Rooms
						</Typography>
						<Form onSubmit={handleSubmit}>
							<FormControl margin="normal" fullWidth>
								<InputLabel htmlFor="age-simple">
									Active Rooms
								</InputLabel>
								<Select
									value={this.state.age}
									onChange={handleChange}
									name="selected-room"
								>
									<MenuItem value="" disabled>
										Select your room
									</MenuItem>
									<MenuItem value="Ten" selected>
										Ten
									</MenuItem>
									<MenuItem value="Twenty">Twenty</MenuItem>
									<MenuItem value="Thirty">Thirty</MenuItem>
								</Select>
								<FormHelperText>
									Some important helper text
								</FormHelperText>
							</FormControl>
							<Field
								name="room"
								label="Room"
								placeholder="Enter your room name"
								component={inputField}
							/>
							<FormControl margin="normal" fullWidth>
								<Button
									type="submit"
									variant="raised"
									color="secondary"
								>
									Create
								</Button>
							</FormControl>
						</Form>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography
							variant="headline"
							color="secondary"
							align="center"
						>
							Connect
						</Typography>
						<Typography align="center">
							<Button variant="raised" color="secondary">
								Connect
							</Button>
						</Typography>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

Connect = reduxForm({
	form: "signup"
})(Connect);

export default Connect;
