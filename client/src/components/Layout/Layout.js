import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles, Hidden } from "@material-ui/core";
import { asyncComponent } from "react-async-component";

import Header from "../../components/Header/Header";
const MobileDrawer = asyncComponent({
	resolve: () => import("../MobileDrawer/MobileDrawer")
});

const style = ({ palette: { primary } }) => ({
	gradient: {
		background: `linear-gradient(152deg, #fff 55%, ${primary.main} 55%)`
	}
});

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
		const {
			children,
			isAuth,
			location,
			user,
			ioUsers,
			classes: { gradient }
		} = this.props;
		const { left } = this.state;

		return (
			<div className="layout">
				<div className="layout-item">
					<Header
						isAuth={isAuth}
						toggleDrawer={toggleDrawer}
						location={location}
					/>
					<Hidden mdUp>
						<MobileDrawer
							toggleDrawer={toggleDrawer}
							drawerAnchor={left}
							isAuth={isAuth}
							user={user}
							ioUsers={ioUsers}
						/>
					</Hidden>
				</div>
				<div className={`layout-item flex-grow ${gradient}`}>
					{children}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.user.id ? true : false,
		user: state.auth.user,
		ioUsers: state.io.users
	};
};

export default withRouter(connect(mapStateToProps)(withStyles(style)(Layout)));
