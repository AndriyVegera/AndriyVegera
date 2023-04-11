import {createBrowserRouter} from 'react-router-dom';
import {AppRoutes} from "./AppRoutes";
import Demo from "../pages/Demo/Demo";

export const router = createBrowserRouter([
    {
        path:AppRoutes.MAIN,
        element: <Demo/>,
        errorElement:<h1>404</h1>
    }
])