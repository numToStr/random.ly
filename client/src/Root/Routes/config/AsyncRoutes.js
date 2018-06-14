import React from "react";
import { asyncComponent } from "react-async-component";
import { Grid, CircularProgress } from "@material-ui/core";

// Rendering Loader until component is loaded ==============
const Loader = (
	<Grid container>
		<Grid item xs={12} className="text-center pt-5">
			<CircularProgress />
		</Grid>
	</Grid>
);

// Async Routes ===========
export const Home = asyncComponent({
	resolve: () => import("../../../containers/Home/Home"),
	LoadingComponent: () => Loader
});
export const SignUp = asyncComponent({
	resolve: () => import("../../../containers/SignUp/SignUp"),
	LoadingComponent: () => Loader
});
export const LogIn = asyncComponent({
	resolve: () => import("../../../containers/LogIn/LogIn"),
	LoadingComponent: () => Loader
});
export const Chat = asyncComponent({
	resolve: () => import("../../../containers/Chat/Chat"),
	LoadingComponent: () => Loader
});
export const Profile = asyncComponent({
	resolve: () => import("../../../containers/Profile/Profile"),
	LoadingComponent: () => Loader
});
export const Connect = asyncComponent({
	resolve: () => import("../../../containers/Connect/Connect"),
	LoadingComponent: () => Loader
});
