import React, { Component, Fragment } from "react";
import {
	List,
	ListItem,
	TextField,
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

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

	render() {
		const { open } = this.state;
		const { onSearchRoom, handleClose, handleClickOpen } = this;

		return (
			<Fragment>
				<List component="nav" className="h-100">
					<ListItem>
						<Button
							className="capsule"
							size="small"
							color="primary"
							variant="raised"
							fullWidth
							onClick={handleClickOpen}
						>
							<Add className="mr-1" />
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
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						Create Chat Room
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Maxime numquam amet error ut nisi animi non
							assumenda ipsum tenetur vitae?
						</DialogContentText>
						<TextField
							autoFocus
							margin="normal"
							label="Room Name"
							type="text"
							name="room"
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button
							className="capsule"
							onClick={handleClose}
							color="primary"
							type="reset"
						>
							Cancel
						</Button>
						<Button
							variant="raised"
							onClick={handleClose}
							className="capsule"
							color="primary"
							type="submit"
						>
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

export default RoomList;
