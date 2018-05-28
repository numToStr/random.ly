import { asyncComponent } from "react-async-component";

export const Home = asyncComponent({
	resolve: () => import("../../../containers/Home/Home")
});
export const SignUp = asyncComponent({
	resolve: () => import("../../../containers/SignUp/SignUp")
});
export const LogIn = asyncComponent({
	resolve: () => import("../../../containers/LogIn/LogIn")
});
export const Chat = asyncComponent({
	resolve: () => import("../../../containers/Chat/Chat")
});
export const Profile = asyncComponent({
	resolve: () => import("../../../containers/Profile/Profile")
});
