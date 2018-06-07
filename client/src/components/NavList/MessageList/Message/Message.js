import React from "react";
import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => {
	return {
		message: {
			background: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
			display: "inline-block"
		}
	};
};

const Message = props => {
	const {
		msg: { message },
		classes,
		side
	} = props;
	return (
		<Paper
			square
			className="mb-3"
			elevation={0}
			style={{
				textAlign: side
			}}
		>
			<Typography
				classes={{ root: classes.message }}
				variant="subheading"
				className="py-2 px-3"
			>
				{message}
			</Typography>
		</Paper>
	);
};

export default withStyles(styles)(Message);
