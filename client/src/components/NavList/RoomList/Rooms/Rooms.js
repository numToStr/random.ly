import React from "react";
import Room from "./Room/Room";
import { List, ListSubheader } from "@material-ui/core";

const Rooms = ({ rooms }) => {
	const R = rooms.map((room, i) => <Room key={i} room={room} />);
	return (
		<List
			component="nav"
			subheader={
				<ListSubheader>Active Rooms ({rooms.length})</ListSubheader>
			}
		>
			{R}
		</List>
	);
};

export default Rooms;
