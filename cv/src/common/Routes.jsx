import {createBrowserRouter} from 'react-router-dom';
import {AppRoutes} from "./AppRoutes";
import Demo from "../pages/Demo/Demo";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";

export const router = createBrowserRouter([
    {
        path:AppRoutes.MAIN,
        element: <Demo/>,
        errorElement:<Error/>
    },
    {
        path:AppRoutes.LOGIN,
        element: <Login/>
    },
    {
        path:AppRoutes.ADMIN,
        element:<Admin/>
    }
])