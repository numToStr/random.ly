import React from "react";
import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => {
	return {
		message: {
			color: theme.palette.primary.contrastText,
			display: "inline-block"
		},
		currentMsgColor: {
			background: theme.palette.primary.main
		},
		otherMsgColor: {
			background: theme.palette.secondary.main
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
		classes,
		currentUser
	} = props;

	let msgColor = classes.otherMsgColor;
	if (currentUser) {
		msgColor = classes.currentMsgColor;

		if (type === "join" || type === "leave") {
			return null;
		}
	} else {
		if (type === "join" || type === "leave") {
			return (
				<Typography
					variant="caption"
					color="secondary"
					align="center"
					paragraph
				>
					{text}
				</Typography>
			);
		}
	}

	return (
		<Paper
			square
			className="mb-3"
			elevation={0}
			style={{
				textAlign: currentUser ? "right" : "left"
			}}
		>
			<Typography
				classes={{ root: [classes.message, msgColor].join(" ") }}
				className="py-1 px-3"
				gutterBottom
			>
				{text}
			</Typography>
			<Typography variant="caption">
				{name} @ {createdAt}
			</Typography>
		</Paper>
	);
};

export default withStyles(styles)(Message);
