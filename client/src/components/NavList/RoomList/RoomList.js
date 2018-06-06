import React, { Component, Fragment } from "react";
import { List, ListItem, TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import RoomCreateDialog from "./Rooms/RoomCreate";

class RoomList extends Component {
	state = {
		roomQuery: null,
		open: false
	};

	onSearchRoom = event => {
		const v = event.target.value;
		this.setState({ roomQuery: v });
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	onCreateRooom = values => {
		console.log(values);
	};

	render() {
		const { open } = this.state;
		const {
			onSearchRoom,
			handleClose,
			handleClickOpen,
			onCreateRooom
		} = this;

		return (
			<Fragment>
				<List component="nav" className="h-100">
					<ListItem>
						<Button
							className="capsule mx-auto px-3"
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
