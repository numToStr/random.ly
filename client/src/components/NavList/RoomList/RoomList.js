import React, { Component, Fragment } from "react";
import { ListItem, TextField } from "@material-ui/core";

class RoomList extends Component {
	state = {
		roomQuery: null
	};

	onSearchRoom = event => {
		const v = event.target.value;
		this.setState({ roomQuery: v });
	};

	render() {
		return (
			<Fragment>
				<ListItem>
					<TextField
						name="room"
						placeholder="Enter room name..."
						type="text"
						label="Search..."
						onChange={this.onSearchRoom}
						fullWidth
					/>
				</ListItem>
			</Fragment>
		);
	}
}

export default RoomList;
