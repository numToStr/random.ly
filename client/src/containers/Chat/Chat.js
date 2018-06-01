import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

import { onConnect } from "../../Store/actions/chat";
import UserNav from "../../components/AsideNav/UserNav";
import Layout from "../../components/Layout/Layout";
import { isMobile } from "../../Store/helper/helper";

class Dashboard extends Component {
	componentDidMount() {
		const { user, ioConnect } = this.props;
		ioConnect(user);
	}

	render() {
		let asideNav = null;
		if (!isMobile) {
			asideNav = (
				<Grid item xs={2}>
					<UserNav />
				</Grid>
			);
		}

		return (
			<Grid container className="h-100">
				{asideNav}
				<Grid item xs={isMobile ? 12 : 10}>
					<Layout>
						<Typography align="center" variant="display3">
							Chat
						</Typography>
					</Layout>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		ioConnect: u => dispatch(onConnect(u))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
