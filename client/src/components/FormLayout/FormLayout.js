import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Logo from "../../components/Images/Logo/RandomLyFull";
import { NavLink } from "react-router-dom";

const FormLayout = ({ children }) => {
	return (
		<Grid container justify="center" className="pt-5">
			<Grid item xs={9} sm={5} md={3} className="mt-4">
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

export default FormLayout;
