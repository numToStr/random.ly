import React, { Component, Fragment } from "react";
import {
	TextField,
	Button,
	CircularProgress,
	Paper,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	withStyles
} from "@material-ui/core";
import { Form, Field, reduxForm, reset } from "redux-form";

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
class ChangePassword extends Component {
	inputField = ({ input, meta: { error, touched }, ...field }) => {
		return (
			<TextField
				{...input}
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
			handleSubmit,
			loading,
			formError,
			pristine,
			classes,
			handleClose,
			open
		} = this.props;

		return (
			<Fragment>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						Reset your password
					</DialogTitle>
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
					<Form onSubmit={handleSubmit} noValidate>
						<DialogContent style={{ paddingTop: 0 }}>
							<Field
								name="prev-password"
								label="Current Password"
								placeholder="Enter your current password"
								type="password"
								component={this.inputField}
							/>
							<Field
								name="password"
								label="New Password"
								placeholder="Enter your new password"
								type="password"
								component={this.inputField}
							/>
							<Field
								name="confirm-password"
								label="Confirm Password"
								placeholder="It should be same"
								type="password"
								component={this.inputField}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button
								variant="raised"
								type="Submit"
								color="primary"
								disabled={pristine || loading}
							>
								{loading ? (
									<CircularProgress size={20} thickness={4} />
								) : (
									"Submit"
								)}
							</Button>
						</DialogActions>
					</Form>
				</Dialog>
			</Fragment>
		);
	}
}

ChangePassword = reduxForm({
	form: "change-password",
	onSubmitSuccess: (result, dispatch) => {
		dispatch(reset("change-password"));
	}
})(ChangePassword);

export default withStyles(styles)(ChangePassword);
