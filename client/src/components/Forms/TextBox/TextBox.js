import React, { Component } from "react";
import { Form, Field, reduxForm, reset } from "redux-form";
import { TextField, Button, withStyles } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const styles = {
	textBoxForm: {
		padding: ".5rem 1.4rem 1rem"
	}
};

class TextBox extends Component {
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
			/>
		);
	};

	render() {
		const {
			handleSubmit,
			pristine,
			classes: { textBoxForm }
		} = this.props;
		return (
			<Form
				onSubmit={handleSubmit}
				className={`${textBoxForm} d-flex align-items-center`}
				noValidate
				autoComplete="off"
			>
				<Field
					name="message"
					placeholder="Type your message..."
					type="text"
					component={this.inputField}
					className="flex-grow"
				/>
				<Button
					variant="fab"
					type="submit"
					mini
					color="primary"
					disabled={pristine}
				>
					<Send
						style={{
							fontSize: 20,
							marginLeft: ".25rem"
						}}
					/>
				</Button>
			</Form>
		);
	}
}

TextBox = reduxForm({
	form: "textbox",
	onSubmitSuccess: (result, dispatch) => {
		dispatch(reset("textbox"));
	}
})(TextBox);

export default withStyles(styles)(TextBox);
