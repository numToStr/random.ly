import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import Logo from "../../components/Images/Logo/RandomLyFull";
import { NavLink } from "react-router-dom";

const styles = ({ palette: { primary } }) => ({
	form: {
		marginTop: "5rem"
	},
	color: {
		fill: primary.main
	}
});

const FormLayout = ({ children, classes: { form, color } }) => {
	return (
		<Grid container justify="center">
			<Grid item xs={9} sm={5} md={3} classes={{ item: form }}>
				<Typography align="center" paragraph>
					<NavLink to="/">
						<Logo width={180} color={color} />
					</NavLink>
				</Typography>
				{children}
			</Grid>
		</Grid>
	);
};

export default withStyles(styles)(FormLayout);
