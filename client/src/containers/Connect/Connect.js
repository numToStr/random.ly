import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Typography, Button, FormControl } from "@material-ui/core";

import { onConnect, onDisconnect } from "../../Store/actions/chat";
import RoomConnect from "../../components/Forms/RoomConnect/RoomConnect";
import FormLayout from "../../components/FormLayout/FormLayout";

class Connect extends Component {
	componentDidMount() {
		onConnect();
	}

	handleSubmit = ({ room, selectedRoom }) => {
		const {
			history: { replace }
		} = this.props;

		selectedRoom = selectedRoom === "---" ? null : selectedRoom;

		let R = "anonymous";
		if (room && selectedRoom) {
			R = selectedRoom;
		} else {
			R = room || selectedRoom;
		}

		replace({
			pathname: "/chat",
			search: `?room=${R}`
		});
	};

	render() {
		const { handleSubmit } = this;

		return (
			<FormLayout>
				<RoomConnect onSubmit={handleSubmit} />
				<FormControl margin="normal" fullWidth>
					<Typography
						variant="subheading"
						color="textSecondary"
						align="center"
					>
						or
					</Typography>
				</FormControl>
				<Typography align="center" paragraph>
					<Button
						variant="raised"
						color="primary"
						fullWidth
						component={NavLink}
						replace
						to={{
							pathname: "/chat",
							search: "?room=anonymous"
						}}
					>
						Connect
					</Button>
				</Typography>
				<Typography variant="caption" color="secondary" align="center">
					--- You will be connected to default room ---
				</Typography>
			</FormLayout>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		ioDisconnect: () => dispatch(onDisconnect())
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Connect);
