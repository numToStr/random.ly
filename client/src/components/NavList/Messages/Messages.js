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
			let CURRENT_USER = false;
			if (msg.user.email === email) {
				CURRENT_USER = true;
			}

			return (
				<Message
					key={i}
					msg={msg}
					nextMsg={messages[i + 1]}
					currentUser={CURRENT_USER}
				/>
			);
		});
	}

	return list;
};

export default MessageList;
