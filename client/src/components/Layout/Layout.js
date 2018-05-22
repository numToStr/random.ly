import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Header from "../../components/Header/Header";
import MobileDrawer from "../MobileDrawer/MobileDrawer";

class Layout extends Component {
	state = {
		left: false
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};
	render() {
		const { toggleDrawer } = this;
		const { children, isAuth, location } = this.props;
		const { left } = this.state;

		return (
			<Fragment>
				<Grid container>
					<Grid item xs={12}>
						<Header
							isAuth={isAuth}
							toggleDrawer={toggleDrawer}
							path={location.pathname}
						/>
						<MobileDrawer
							toggleDrawer={toggleDrawer}
							drawerAnchor={left}
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
		isAuth: state.auth.token ? true : false
	};
};

export default withRouter(connect(mapStateToProps)(Layout));
