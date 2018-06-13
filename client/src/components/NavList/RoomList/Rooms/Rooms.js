import React from "react";
import Room from "./Room/Room";

const Rooms = ({ rooms }) => {
	const R = rooms.map((room, i) => <Room key={i} room={room} />);

	return R;
};

export default Rooms;
