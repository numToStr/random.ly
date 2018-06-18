import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

const Loader = () => {
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				style={{ textAlign: "center", paddingTop: "5rem" }}
			>
				<CircularProgress />
			</Grid>
		</Grid>
	);
};

export default Loader;
