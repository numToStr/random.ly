import React, { Component, Fragment } from "react";
import { List, ListItem, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import RoomCreateDialog from "./Room/RoomCreateForm";

class RoomCreateSearch extends Component {
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
		const { handleClose, handleClickOpen } = this;
		const { open } = this.state;
		const { onCreateRooom /* onSearchRoom */ } = this.props;

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

				<RoomCreateDialog
					open={open}
					onSubmit={onCreateRooom}
					handleClose={handleClose}
				/>
			</Fragment>
		);
	}
}

export default RoomCreateSearch;
