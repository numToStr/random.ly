import React, { Component, Fragment } from "react";
import { Typography } from "material-ui";

import Header from "../../components/Header/Header";

class Dashboard extends Component {
	render() {
		return (
			<Fragment>
				<Header title="randomly" />
				<Typography>Dashboard</Typography>
			</Fragment>
		);
	}
}

export default Dashboard;
