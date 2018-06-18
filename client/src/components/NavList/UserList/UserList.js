import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Users from "./Users/Users";
import CurrentUser from "./Users/CurrentUser";

class UserList extends Component {
	state = {
		leave: false
	};

	leaveRoom = () => {
		this.setState({ leave: true });
	};

	render() {
		const { user, ioUsers } = this.props;
		const { leaveRoom } = this;
		const { leave } = this.state;

		if (leave) {
			return <Redirect to="/connect" />;
		}

		return (
			<Fragment>
				<CurrentUser leaveRoom={leaveRoom} user={user} />
				<Users users={ioUsers} />
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		ioUsers: state.io.users
	};
};

export default connect(mapStateToProps)(UserList);
