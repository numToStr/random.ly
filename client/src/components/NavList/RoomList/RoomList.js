import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
	List,
	ListItem,
	ListSubheader,
	TextField,
	Button
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

import RoomCreateDialog from "./Rooms/RoomCreate";
import Rooms from "./Rooms/Rooms";

class RoomList extends Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { open } = this.state;
		const { handleClose, handleClickOpen } = this;
		const { /* onSearchRoom, */ onCreateRooom, rooms } = this.props;

		return (
			<Fragment>
				<List component="nav">
					<ListItem>
						<Button
							className="mx-auto px-3"
							size="small"
							color="primary"
							variant="raised"
							onClick={handleClickOpen}
						>
							<Add />
							Create Room
						</Button>
					</ListItem>
					{/* <ListItem>
						<TextField
							name="room"
							placeholder="Enter room name..."
							type="text"
							label="Search..."
							onChange={onSearchRoom}
							fullWidth
						/>
					</ListItem> */}
				</List>

				<List
					component="nav"
					subheader={
						<ListSubheader>
							Active Rooms ({rooms.length})
						</ListSubheader>
					}
				>
					<Rooms rooms={rooms} />
				</List>

				<RoomCreateDialog
					open={open}
					onSubmit={onCreateRooom}
					handleClose={handleClose}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		rooms: state.io.rooms
	};
};

export default connect(mapStateToProps)(RoomList);
