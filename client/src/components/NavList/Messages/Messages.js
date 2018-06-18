import React from "react";
import { Typography } from "@material-ui/core";

import Message from "./Message/Message";

const MessageList = props => {
	const {
		messages,
		currentUser: { email }
	} = props;

	let list = (
		<Typography align="center" variant="display1">
			Let's Chat
		</Typography>
	);
	if (messages.length) {
		list = messages.map((msg, i) => {
			let currentUser = false;
			if (msg.user.email === email) {
				currentUser = true;
			}

			return <Message key={i} msg={msg} currentUser={currentUser} />;
		});
	}

	return list;
};

export default MessageList;
