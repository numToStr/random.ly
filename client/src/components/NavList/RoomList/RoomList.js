import React, { Component, Fragment } from "react";
import { List, ListItem, TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import RoomCreateDialog from "./Rooms/RoomCreate";

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
		const { onSearchRoom, onCreateRooom } = this.props;

		return (
			<Fragment>
				<List component="nav" className="h-100">
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
					<ListItem>
						<TextField
							name="room"
							placeholder="Enter room name..."
							type="text"
							label="Search..."
							onChange={onSearchRoom}
							fullWidth
						/>
					</ListItem>
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

export default RoomList;
