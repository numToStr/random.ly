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
		msg: { message },
		classes,
		currentUser
	} = props;

	let msgColor = classes.otherMsgColor;
	if (currentUser) {
		msgColor = classes.currentMsgColor;
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
				variant="subheading"
				className="py-2 px-3"
			>
				{message}
			</Typography>
		</Paper>
	);
};

export default withStyles(styles)(Message);
