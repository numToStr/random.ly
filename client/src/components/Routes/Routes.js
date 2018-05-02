import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
        </Switch>
    );
};

export default Routes;
