import {createBrowserRouter} from 'react-router-dom';
import {AppRoutes} from "./AppRoutes";
import Demo from "../pages/Demo/Demo";
import Error from "../pages/Error/Error";
import Admin from "../pages/Admin/Admin";
import Login2 from "../pages/Login2/Login2";
import LoginHOC from "../components/HOC/LoginHOC";

export const router = createBrowserRouter([
    {
        path:AppRoutes.MAIN,
        element: <Demo/>,
        errorElement:<Error/>
    },
    {
        path:AppRoutes.LOGIN,
        element: <LoginHOC Component={Login2}/>
    },
    {
        path:AppRoutes.ADMIN,
        element:<Admin/>
    }
])