import React from "react";
import { asyncComponent } from "react-async-component";
import Loader from "../../../components/Loader/Loader";

// Async Routes ===========
export const Home = asyncComponent({
	resolve: () => import("../../../containers/Home/Home"),
	LoadingComponent: () => <Loader />
});
export const SignUp = asyncComponent({
	resolve: () => import("../../../containers/SignUp/SignUp"),
	LoadingComponent: () => <Loader />
});
export const LogIn = asyncComponent({
	resolve: () => import("../../../containers/LogIn/LogIn"),
	LoadingComponent: () => <Loader />
});
export const Chat = asyncComponent({
	resolve: () => import("../../../containers/Chat/Chat"),
	LoadingComponent: () => <Loader />
});
export const Profile = asyncComponent({
	resolve: () => import("../../../containers/Profile/Profile"),
	LoadingComponent: () => <Loader />
});
export const Connect = asyncComponent({
	resolve: () => import("../../../containers/Connect/Connect"),
	LoadingComponent: () => <Loader />
});
