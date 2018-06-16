import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
	Typography,
	Button,
	FormControl,
	CircularProgress
} from "@material-ui/core";

import { onDisconnect } from "../../Store/actions/chat";
import RoomConnect from "../../components/Forms/RoomConnect/RoomConnect";
import FormLayout from "../../components/FormLayout/FormLayout";

class Connect extends Component {
	state = {
		room: null
	};

	joinUser = ({ room, selectedRoom }) => {
		selectedRoom = selectedRoom === "---" ? null : selectedRoom;

		let R = "anonymous";
		if (room && selectedRoom) {
			R = room;
		} else if (room || selectedRoom) {
			R = room || selectedRoom;
		}

		this.setState({
			room: R
		});
	};

	render() {
		const { joinUser } = this;
		const { ioLoading } = this.props;
		const { room } = this.state;

		if (room) {
			return (
				<Redirect
					push
					to={{ pathname: "/chat", search: `?room=${room}` }}
				/>
			);
		}

		return (
			<FormLayout>
				<RoomConnect loading={ioLoading} onSubmit={joinUser} />
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
						onClick={joinUser}
						disabled={ioLoading}
					>
						{ioLoading ? (
							<CircularProgress
								size={20}
								thickness={4}
								color="secondary"
							/>
						) : (
							"Connect"
						)}
					</Button>
				</Typography>
				<Typography variant="caption" color="secondary" align="center">
					--- You will be connected to default room ---
				</Typography>
			</FormLayout>
		);
	}
}

const mapStateToProps = state => {
	return {
		ioLoading: state.io.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		ioDisconnect: () => dispatch(onDisconnect())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Connect);
