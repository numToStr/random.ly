import React, { Component } from "react";
import { Form, Field, reduxForm, reset } from "redux-form";
import { Grid, TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";

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
		const { handleSubmit, pristine } = this.props;
		return (
			<Grid item xs={12} className="layout-column">
				<Form
					onSubmit={handleSubmit}
					className="py-3 px-4"
					noValidate
					autoComplete="off"
				>
					<Field
						name="message"
						placeholder="Type your message..."
						type="text"
						component={this.inputField}
					/>
					<Button
						variant="fab"
						type="submit"
						mini
						color="secondary"
						aria-label="add"
						disabled={pristine}
					>
						<Send
							className="ml-1"
							style={{
								height: "1.2rem",
								width: "1.2rem"
							}}
						/>
					</Button>
				</Form>
			</Grid>
		);
	}
}

TextBox = reduxForm({
	form: "textbox",
	onSubmitSuccess: (result, dispatch) => {
		dispatch(reset("textbox"));
	}
})(TextBox);

export default TextBox;
