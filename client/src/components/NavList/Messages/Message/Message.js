import React from "react";
import { Paper, Typography, withStyles } from "@material-ui/core";
import { format } from "date-fns";

const styles = ({ palette }) => {
	return {
		messageColor: {
			display: "inline-block",
			padding: ".25rem .8rem"
		},
		currentMsgColor: {
			background: palette.primary.main,
			color: palette.primary.contrastText
		},
		otherMsgColor: {
			background: palette.secondary.main,
			color: palette.secondary.contrastText
		}
	};
};

const Message = props => {
	const {
		msg: {
			text,
			createdAt,
			user: { name },
			type
		},
		nextMsg,
		classes: { otherMsgColor, currentMsgColor, messageColor },
		currentUser
	} = props;

	let msgColor = otherMsgColor;
	if (currentUser) {
		msgColor = currentMsgColor;

		if (type === "join" || type === "leave") {
			return null;
		}
	} else {
		if (type === "join" || type === "leave") {
			return (
				<Typography variant="caption" align="center" paragraph>
					{text}
				</Typography>
			);
		}
	}

	let curTime = format(new Date(createdAt).toUTCString(), "hh:mm a");
	let caption = (
		<Typography variant="caption" paragraph>
			{name} @ {curTime}
		</Typography>
	);

	if (nextMsg) {
		let nextTime = format(
			new Date(nextMsg.createdAt).toUTCString(),
			"hh:mm a"
		);

		if (curTime === nextTime && name === nextMsg.user.name) {
			caption = null;
		}
	}

	return (
		<Paper
			square
			elevation={0}
			style={{
				textAlign: currentUser ? "right" : "left"
			}}
		>
			<Typography
				classes={{ root: [messageColor, msgColor].join(" ") }}
				gutterBottom
			>
				{text}
			</Typography>
			{caption}
		</Paper>
	);
};

export default withStyles(styles)(Message);
