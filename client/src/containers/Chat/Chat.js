import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Hidden, withWidth } from "@material-ui/core";
import { asyncComponent } from "react-async-component";

import Layout from "../../components/Layout/Layout";
import {
	onCreateMessage,
	onNewMessage,
	onUpdatedUsers,
	onUpdatedRooms,
	onJoin,
	onLeave
} from "../../Store/actions/index";

import TextBox from "../../components/Forms/TextBox/TextBox";
import Messages from "../../components/NavList/Messages/Messages";
import Loader from "../../components/Loader/Loader";

import AsideNav from "../../components/AsideNav/AsideNav";
const RoomCreateSearch = asyncComponent({
	resolve: () => import("../../components/NavList/Rooms/RoomCreateSearch")
});
const Rooms = asyncComponent({
	resolve: () => import("../../components/NavList/Rooms/Rooms")
});
const CurrentUser = asyncComponent({
	resolve: () => import("../../components/NavList/Users/CurrentUser")
});
const Users = asyncComponent({
	resolve: () => import("../../components/NavList/Users/Users")
});

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
			return <Loader />;
		}

		return (
			<Grid container className="h-100">
				<Hidden smDown>
					{/* not using css implementation bcz of async loading and layout problem */}
					<Grid item xs={2}>
						<AsideNav side="left">
							<CurrentUser user={user} />
							<Users users={ioUsers} />
						</AsideNav>
					</Grid>
				</Hidden>
				<Grid item xs>
					<Layout>
						<div
							className="layout"
							style={{
								background: "#fff"
							}}
						>
							<div
								className="layout-item flex-grow"
								style={{
									padding: ".5rem 1rem 0",
									overflow: "auto"
								}}
							>
								<Messages
									messages={messages}
									currentUser={user}
								/>
							</div>
							<div className="layout-item">
								<TextBox onSubmit={sendMessage} />
							</div>
						</div>
					</Layout>
				</Grid>
				<Hidden smDown>
					{/* not using css implementation bcz of async loading and layout problem */}
					<Grid item xs={2}>
						<AsideNav side="right">
							<RoomCreateSearch
								onSearchRoom={onSearchRoom}
								onCreateRooom={onCreateRooom}
							/>
							<Rooms rooms={ioRooms} />
						</AsideNav>
					</Grid>
				</Hidden>
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
)(withWidth()(Chat));
