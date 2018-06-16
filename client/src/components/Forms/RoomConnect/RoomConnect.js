import React, { Component } from "react";
import { Form, Field, reduxForm } from "redux-form";
import {
	TextField,
	Button,
	FormControl,
	MenuItem,
	CircularProgress
} from "@material-ui/core";

class RoomConnect extends Component {
	inputField = ({ input, ...left }) => (
		<TextField
			InputLabelProps={{
				shrink: true
			}}
			margin="normal"
			helperText="Avoid spaces and special character."
			fullWidth
			{...input}
			{...left}
		/>
	);

	selectField = ({
		input: { onChange, value, onBlur, ...inputProps },
		label
	}) => {
		return (
			<TextField
				select
				helperText="Please select your room"
				margin="normal"
				value={value}
				fullWidth
				onChange={e => onChange(e)}
				onBlur={e => onBlur(e)}
				label={label}
				{...inputProps}
			>
				<MenuItem value="---" disabled>
					--- Select your room ---
				</MenuItem>
				<MenuItem value="Ten">Ten</MenuItem>
				<MenuItem value="Twenty">Twenty</MenuItem>
				<MenuItem value="Thirty">Thirty</MenuItem>
			</TextField>
		);
	};
	render() {
		const { inputField, selectField } = this;
		const { handleSubmit, pristine, loading } = this.props;

		return (
			<Form onSubmit={handleSubmit}>
				<Field
					name="selectedRoom"
					component={selectField}
					label="Active Rooms"
				/>
				<Field
					type="text"
					name="room"
					label="Room Name"
					placeholder="Your special room name"
					component={inputField}
				/>
				<FormControl margin="normal" fullWidth>
					<Button
						type="submit"
						variant="raised"
						disabled={pristine || loading}
					>
						{loading ? (
							<CircularProgress
								size={20}
								thickness={4}
								color="secondary"
							/>
						) : (
							"Enter Room"
						)}
					</Button>
				</FormControl>
			</Form>
		);
	}
}

RoomConnect = reduxForm({
	form: "roomConnect",
	initialValues: {
		selectedRoom: "---"
	}
})(RoomConnect);

export default RoomConnect;
