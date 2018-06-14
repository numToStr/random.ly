import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import { isMobile } from "../../Store/helper/helper";
import AsideNav from "../../components/AsideNav/AsideNav";
import UserList from "../../components/NavList/UserList/UserList";
import RoomList from "../../components/NavList/RoomList/RoomList";

import {
	onConnect,
	onCreateMessage,
	onNewMessage,
	onDisconnect,
	onUpdatedUsers,
	onUpdatedRooms
} from "../../Store/actions/chat";
import TextBox from "../../components/Forms/TextBox/TextBox";
import MessageList from "../../components/NavList/MessageList/MessageList";

class Chat extends Component {
	state = {
		roomQuery: null,
		room: null
	};

	componentDidMount() {
		const {
			user: { name, email },
			ioConnect,
			ioNewMessage,
			ioUpdatedUsers,
			ioUpdatedRooms,
			history: {
				location: { search },
				replace
			}
		} = this.props;

		const queryURI = new URLSearchParams(search);
		let room = queryURI.get("room");

		if (!room) {
			replace({
				pathname: "/chat",
				search: "?room=anonymous"
			});
			room = "anonymous";
		}

		this.setState({
			room
		});

		ioConnect({ name, email, room });
		ioNewMessage();
		ioUpdatedUsers();
		ioUpdatedRooms();
		this.onChangeRoom();
	}

	componentWillUnmount() {
		const { ioDisconnect } = this.props;
		ioDisconnect();
	}

	sendMessage = ({ message: text }) => {
		if (text) {
			const { room } = this.state;
			const {
				user: { name, email }
			} = this.props;
			onCreateMessage(room, { text, user: { name, email } });
		}
	};

	onSearchRoom = event => {
		const v = event.target.value;
		this.setState({ roomQuery: v });
	};

	onCreateRooom = ({ room }) => {
		const {
			ioConnect,
			ioDisconnect,
			user: { name, email },
			history: { replace }
		} = this.props;

		if (room) {
			// replacing current url
			replace({
				pathname: "/chat",
				search: `?room=${room}`
			});

			// first disconnecting user from current room
			ioDisconnect();
			// then connecting user to desired room
			ioConnect({ name, email, room });
		}
	};

	onChangeRoom = () => {
		const {
			ioConnect,
			ioDisconnect,
			user: { name, email },
			history: { listen }
		} = this.props;

		listen(({ search }, action) => {
			const queryURI = new URLSearchParams(search);
			const room = queryURI.get("room");
			// first disconnecting user from current room
			ioDisconnect();
			// then connecting user to desired room
			ioConnect({ name, email, room });
		});
	};

	render() {
		const { sendMessage, onSearchRoom, onCreateRooom } = this;
		const { messages, user, ioLoading } = this.props;

		if (ioLoading) {
			return (
				<Grid container>
					<Grid item xs={12} className="text-center pt-5">
						<CircularProgress />
					</Grid>
				</Grid>
			);
		}

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
								className="layout-column flex-grow px-3 pt-2"
								style={{
									overflow: "auto"
								}}
							>
								<MessageList
									messages={messages}
									currentUser={user}
								/>
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
		user: state.auth.user,
		messages: state.io.messages,
		ioLoading: state.io.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		ioConnect: u => dispatch(onConnect(u)),
		ioNewMessage: () => dispatch(onNewMessage()),
		ioDisconnect: () => dispatch(onDisconnect()),
		ioUpdatedUsers: () => dispatch(onUpdatedUsers()),
		ioUpdatedRooms: () => dispatch(onUpdatedRooms())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);
