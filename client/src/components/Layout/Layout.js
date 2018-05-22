import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Header from "../../components/Header/Header";
import { authLogout } from "../../Store/actions/index";

class Layout extends Component {
	state = {
		left: false,
		menuAnchor: null
	};

	openMenu = e => {
		this.setState({ menuAnchor: e.currentTarget });
	};

	closeMenu = () => {
		this.setState({ menuAnchor: null });
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { openMenu, closeMenu, toggleDrawer } = this;
		const { children, isAuth, userName, logout, location } = this.props;
		const { menuAnchor, left } = this.state;

		return (
			<Fragment>
				<Grid container>
					<Grid item xs={12}>
						<Header
							isAuth={isAuth}
							userName={userName}
							logout={logout}
							menuAnchor={menuAnchor}
							openMenu={openMenu}
							closeMenu={closeMenu}
							toggleDrawer={toggleDrawer}
							drawerAnchor={left}
							path={location.pathname}
						/>
					</Grid>
					<Grid item xs={12}>
						{children}
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.token ? true : false,
		userName: state.auth.user.name
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(authLogout())
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
