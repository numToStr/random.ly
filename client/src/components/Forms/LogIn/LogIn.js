import React, { Component, Fragment } from "react";
import {
	TextField,
	Button,
	FormControl,
	CircularProgress,
	withStyles,
	Typography,
	Paper
} from "@material-ui/core";
import { Form, Field, reduxForm } from "redux-form";

import validate from "../config/validate";
// import submit from '../config/asyncValidate'; // for async validations

const styles = theme => {
	const {
		palette: { error }
	} = theme;
	return {
		errorPaper: {
			background: error.main,
			color: error.contrastText,
			padding: ".5rem 0",
			marginBottom: ".5rem"
		}
	};
};

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
		const {
			classes,
			loading,
			handleSubmit,
			pristine,
			formError
		} = this.props;

		return (
			<Fragment>
				{formError && (
					<Paper
						square={true}
						classes={{
							root: classes.errorPaper
						}}
						elevation={0}
					>
						<Typography
							variant="caption"
							color="inherit"
							align="center"
						>
							{formError}
						</Typography>
					</Paper>
				)}
				<Form
					// onSubmit={this.props.handleSubmit(submit)} // for async validations
					onSubmit={handleSubmit}
					noValidate
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
							variant="raised"
							type="Submit"
							color="primary"
							disabled={pristine || loading}
						>
							{loading ? (
								<CircularProgress size={20} thickness={4} />
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

export default withStyles(styles)(SignUp);
