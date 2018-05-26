import React, { Component, Fragment } from "react";
import {
	TextField,
	Button,
	FormControl,
	CircularProgress
} from "@material-ui/core";
import { Form, Field, reduxForm } from "redux-form";

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
		const { loading, handleSubmit, pristine } = this.props;
		return (
			<Fragment>
				<Form
					// onSubmit={this.props.handleSubmit(submit)} // for async validations
					onSubmit={handleSubmit}
					noValidate
					autoComplete="off"
				>
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
						placeholder="It should be correct"
						type="password"
						component={this.inputField}
					/>
					<FormControl margin="normal" fullWidth>
						<Button
							className="capsule"
							variant="raised"
							type="Submit"
							color="primary"
							disabled={pristine || loading}
						>
							{loading ? (
								<CircularProgress
									size={20}
									thickness={4}
									color="secondary"
								/>
							) : (
								"Login"
							)}
						</Button>
					</FormControl>
				</Form>
			</Fragment>
		);
	}
}

SignUp = reduxForm({
	form: "signup",
	validate
})(SignUp);

export default SignUp;
