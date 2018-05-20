import React, { Component, Fragment } from "react";
import { NavLink } from 'react-router-dom';
import { TextField, Button, FormControl, Typography } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";

import validate from "../config/validate";
// import submit from '../config/asyncValidate'; // for async validations


class SignUp extends Component {
	state = {
		showPassword: false
	};

	inputField = field => {
		const { error, touched } = field.meta;
		return (
			<TextField
				{...field.input}
				{...field}
				margin="normal"
				error={touched && error ? true : false}
				helperText={touched && error ? error : null}
				InputLabelProps={{
					shrink: true
				}}
				fullWidth
			/>
		);
	};

	render() {
		return (
			<Fragment>
				<form
					// onSubmit={this.props.handleSubmit(submit)} // for async validations
					onSubmit={this.props.handleSubmit}
					noValidate
					autoComplete="off"
				>
					<Field
						name="name"
						label="Name"
						placeholder="John Doe"
						type="text"
						component={this.inputField}
					/>
					<Field
						name="email"
						label="Email"
						placeholder="johndoe@email.com"
						type="email"
						component={this.inputField}
					/>
					<Field
						name="password"
						label="Password"
						placeholder="I'll be our secret"
						type="password"
						component={this.inputField}
					/>
					<FormControl margin="normal" fullWidth>
						<Button
							variant="raised"
							type="Submit"
							color="primary"
							disabled={
								this.props.pristine || this.props.submitting
							}
						>
							Sign up
						</Button>
					</FormControl>
				</form>
				<FormControl margin="dense" fullWidth>
					<Typography align="center" color="textSecondary" variant="caption">Already have an account? <NavLink to="/user/login">Login</NavLink> </Typography>
				</FormControl>
			</Fragment>
		);
	}
}

SignUp = reduxForm({
	form: "signup",
	validate
})(SignUp);

export default SignUp;
