import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import Logo from "../../components/Images/Logo/RandomLyFull";
import { NavLink } from "react-router-dom";

const styles = {
	form: {
		marginTop: "5rem"
	}
};

const FormLayout = ({ children, classes: { form } }) => {
	return (
		<Grid container justify="center">
			<Grid item xs={9} sm={5} md={3} classes={{ item: form }}>
				<Typography align="center" paragraph>
					<NavLink to="/">
						<Logo width={180} />
					</NavLink>
				</Typography>
				{children}
			</Grid>
		</Grid>
	);
};

export default withStyles(styles)(FormLayout);
