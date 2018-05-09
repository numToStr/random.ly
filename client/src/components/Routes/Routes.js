import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";

const Routes = () => {
	return (
		<Switch>
			<Route path="/user/signup" component={SignUp} />
			<Route path="/" exact component={Home} />
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
