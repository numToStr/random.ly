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
class ChangeName extends Component {
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
						Modify your name
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
								name="name"
								label="Your name"
								placeholder="John Doe"
								type="text"
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

ChangeName = reduxForm({
	form: "change-name",
	onSubmitSuccess: (result, dispatch) => {
		dispatch(reset("change-name"));
	}
})(ChangeName);

export default withStyles(styles)(ChangeName);
