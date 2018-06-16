import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
	Typography,
	Button,
	FormControl,
	CircularProgress
} from "@material-ui/core";

import { onConnect, onDisconnect, onJoin } from "../../Store/actions/chat";
import RoomConnect from "../../components/Forms/RoomConnect/RoomConnect";
import FormLayout from "../../components/FormLayout/FormLayout";

class Connect extends Component {
	componentDidMount() {
		const { ioConnect } = this.props;
		ioConnect();
	}

	joinUser = ({ room, selectedRoom }) => {
		const { user, ioJoin } = this.props;

		selectedRoom = selectedRoom === "---" ? null : selectedRoom;

		let R = "anonymous";
		if (room && selectedRoom) {
			R = room;
		} else if (room || selectedRoom) {
			R = room || selectedRoom;
		}

		ioJoin({ ...user, room: R });
	};

	render() {
		const { joinUser } = this;
		const { ioUser, ioLoading } = this.props;

		if (ioUser) {
			return (
				<Redirect
					push
					to={{ pathname: "/chat", search: `?room=${ioUser.room}` }}
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
		user: state.auth.user,
		ioUser: state.io.user,
		ioLoading: state.io.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		ioConnect: () => dispatch(onConnect()),
		ioJoin: u => dispatch(onJoin(u)),
		ioDisconnect: () => dispatch(onDisconnect())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Connect);
