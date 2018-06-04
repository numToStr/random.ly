import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Form, Field, reduxForm } from "redux-form";

class Search extends Component {
	inputField = field => {
		return <TextField {...field.input} {...field} />;
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<Form onSubmit={handleSubmit} noValidate autoComplete="off">
				<Field
					name="room"
					placeholder="Search or Create Room..."
					type="text"
					label="Search..."
					component={this.inputField}
				/>
			</Form>
		);
	}
}

Search = reduxForm({
	form: "roomSearch"
})(Search);

export default Search;
