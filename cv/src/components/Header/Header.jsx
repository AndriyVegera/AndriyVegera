import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";

const Header = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return  (
        <div>
            <Link to={AppRoutes.MAIN}>Main</Link>
        </div>
    )
}