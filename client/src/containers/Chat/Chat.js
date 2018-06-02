import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import { isMobile } from "../../Store/helper/helper";
import AsideNav from "../../components/AsideNav/AsideNav";
import UserList from "../../components/NavList/UserList/UserList";

import { onConnect } from "../../Store/actions/chat";

class Dashboard extends Component {
	componentDidMount() {
		const { user, ioConnect } = this.props;
		ioConnect(user);
	}

	render() {
		let userNav = null;
		if (!isMobile) {
			userNav = (
				<Grid item xs={2}>
					<AsideNav side="left">
						<UserList />
					</AsideNav>
				</Grid>
			);
		}

		return (
			<Grid container className="h-100">
				{userNav}
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
