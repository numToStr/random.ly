import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import { isMobile } from "../../Store/helper/helper";
import AsideNav from "../../components/AsideNav/AsideNav";

import {
	onCreateMessage,
	onNewMessage,
	onUpdatedUsers,
	onUpdatedRooms,
	onJoin,
	onLeave
} from "../../Store/actions/index";
import TextBox from "../../components/Forms/TextBox/TextBox";
import MessageList from "../../components/NavList/MessageList/MessageList";
import RoomCreateSearch from "../../components/NavList/Rooms/RoomCreateSearch";
import Rooms from "../../components/NavList/Rooms/Rooms";
import CurrentUser from "../../components/NavList/Users/CurrentUser";
import Users from "../../components/NavList/Users/Users";

class Chat extends Component {
	state = {
		roomQuery: null,
		room: null
	};

	componentDidMount() {
		const {
			user,
			ioJoin,
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

		ioJoin({ ...user, room });
		ioNewMessage();
		ioUpdatedUsers();
		ioUpdatedRooms();
	}

	componentWillUnmount() {
		const { user, ioLeave } = this.props;
		const { room } = this.state;

		ioLeave({ ...user, room });
	}

	componentDidUpdate(prevProps, prevState) {
		const { onChangeRoom } = this;
		onChangeRoom(prevProps);
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
			history: { replace }
		} = this.props;

		if (room) {
			/* 
			* replacing current url
			* after replacing... it will automatically disconnects and reconnects
			*/
			replace({
				pathname: "/chat",
				search: `?room=${room}`
			});
		}
	};

	onChangeRoom = prevProps => {
		const { location: prevLocation } = prevProps;
		const { user, ioLeave, ioJoin, location: curLocation } = this.props;
		if (prevLocation !== curLocation) {
			const _queryURI = new URLSearchParams(prevLocation.search);
			const oldRoom = _queryURI.get("room");
			const queryURI = new URLSearchParams(curLocation.search);
			const newRoom = queryURI.get("room");
			if (newRoom) {
				// first disconnecting user from current room
				ioLeave({ ...user, room: oldRoom });
				// then connecting user to desired room
				ioJoin({ ...user, room: newRoom });
			}
		}
	};

	render() {
		const { sendMessage, onSearchRoom, onCreateRooom } = this;
		const { messages, user, ioUsers, ioLoading, ioRooms } = this.props;

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
						<CurrentUser user={user} />
						<Users users={ioUsers} />
					</AsideNav>
				</Grid>
			);
			roomNav = (
				<Grid item xs={2}>
					<AsideNav side="right">
						<RoomCreateSearch
							onSearchRoom={onSearchRoom}
							onCreateRooom={onCreateRooom}
						/>
						<Rooms rooms={ioRooms} />
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
		ioRooms: state.io.rooms,
		user: state.auth.user,
		messages: state.io.messages,
		ioLoading: state.io.loading,
		ioUsers: state.io.users
	};
};

const mapDispatchToProps = dispatch => {
	return {
		ioJoin: u => dispatch(onJoin(u)),
		ioLeave: u => dispatch(onLeave(u)),
		ioNewMessage: () => dispatch(onNewMessage()),
		ioUpdatedUsers: () => dispatch(onUpdatedUsers()),
		ioUpdatedRooms: () => dispatch(onUpdatedRooms())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);
