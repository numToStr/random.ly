import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import { isMobile } from "../../Store/helper/helper";
import AsideNav from "../../components/AsideNav/AsideNav";
import UserList from "../../components/NavList/UserList/UserList";

import {
	onConnect,
	onCreateMessage,
	onNewMessage
} from "../../Store/actions/chat";
import TextBox from "../../components/Forms/TextBox/TextBox";

class Dashboard extends Component {
	componentDidMount() {
		const { user, ioConnect, ioNewMessage } = this.props;
		ioConnect(user);
		ioNewMessage();
	}

	sendMessage = values => {
		if (values.message) {
			onCreateMessage(values.message);
		}
	};

	render() {
		const { sendMessage } = this;

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
						<Grid container className="layout">
							<Grid
								item
								xs={12}
								className="layout-column flex-grow"
							>
								<Typography align="center" variant="display3">
									Chat
								</Typography>
							</Grid>
							<TextBox onSubmit={sendMessage} />
						</Grid>
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
		ioConnect: u => dispatch(onConnect(u)),
		ioNewMessage: () => dispatch(onNewMessage())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
