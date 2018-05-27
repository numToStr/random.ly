import { asyncComponent } from 'react-async-component';

export const SignUp = asyncComponent({
    resolve: () => import("../../../containers/SignUp/SignUp")
});
export const LogIn = asyncComponent({
    resolve: () => import("../../../containers/LogIn/LogIn")
});
export const Dashboard = asyncComponent({
    resolve: () => import("../../../containers/Dashboard/Dashboard")
});
export const Profile = asyncComponent({
    resolve: () => import("../../../containers/Profile/Profile")
})