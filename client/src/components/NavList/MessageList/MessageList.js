import React from "react";
import { Typography } from "@material-ui/core";

import Message from "./Message/Message";

const MessageList = props => {
	const {
		messages: { all },
		currentUser: { name }
	} = props;

	let list = (
		<Typography align="center" variant="display1">
			Let's Chat
		</Typography>
	);
	if (all) {
		list = all.map((msg, i) => {
			let side = "left";
			if (msg.user === name) {
				side = "right";
			}

			return <Message key={i} msg={msg} side={side} />;
		});
	}

	return list;
};

export default MessageList;
