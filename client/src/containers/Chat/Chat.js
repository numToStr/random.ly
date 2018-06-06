import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import { isMobile } from "../../Store/helper/helper";
import AsideNav from "../../components/AsideNav/AsideNav";
import UserList from "../../components/NavList/UserList/UserList";
import RoomList from "../../components/NavList/RoomList/RoomList";

import {
	onConnect,
	onCreateMessage,
	onNewMessage,
	onDisconnect
} from "../../Store/actions/chat";
import TextBox from "../../components/Forms/TextBox/TextBox";

class Chat extends Component {
	state = {
		roomQuery: null
	};

	componentDidMount() {
		const { user, ioConnect, ioNewMessage } = this.props;
		ioConnect(user);
		ioNewMessage();
	}

	componentWillUnmount() {
		const { ioDisconnect } = this.props;
		ioDisconnect();
	}

	sendMessage = values => {
		if (values.message) {
			onCreateMessage(values.message);
		}
	};

	onSearchRoom = event => {
		const v = event.target.value;
		this.setState({ roomQuery: v });
	};

	onCreateRooom = values => {
		if (values.room) {
			console.log(values);
		}
	};

	render() {
		const { sendMessage, onSearchRoom, onCreateRooom } = this;

		let userNav = null;
		let roomNav = null;
		if (!isMobile) {
			userNav = (
				<Grid item xs={2}>
					<AsideNav side="left">
						<UserList />
					</AsideNav>
				</Grid>
			);
			roomNav = (
				<Grid item xs={2}>
					<AsideNav side="right">
						<RoomList
							onSearchRoom={onSearchRoom}
							onCreateRooom={onCreateRooom}
						/>
					</AsideNav>
				</Grid>
			);
		}

		return (
			<Grid container className="h-100">
				{userNav}
				<Grid item xs={isMobile ? 12 : 8}>
					<Layout>
						<Grid container className="layout">
							<Grid
								item
								xs={12}
								className="layout-column flex-grow"
							>
								<Typography align="center" variant="display3">
									Chat
								</Typography>
							</Grid>
							<TextBox onSubmit={sendMessage} />
						</Grid>
					</Layout>
				</Grid>
				{roomNav}
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		ioConnect: u => dispatch(onConnect(u)),
		ioNewMessage: () => dispatch(onNewMessage()),
		ioDisconnect: () => dispatch(onDisconnect())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);
