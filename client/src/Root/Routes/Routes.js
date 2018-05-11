import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../containers/Home/Home";
import SignUp from "../../containers/SignUp/SignUp";
import LogIn from "../../containers/LogIn/LogIn";

const Routes = () => {
	return (
		<Switch>
			<Route path="/user/login" component={LogIn} />
			<Route path="/user/signup" component={SignUp} />
			<Route path="/" exact component={Home} />
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
