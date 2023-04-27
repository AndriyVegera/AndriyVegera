import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";
import styles from "../../pages/Demo/Demo.module.scss";
import "./../../pages/Error/Error.css"
export const ButtonDemoLink = ()=>{
    return(
        <Link to={AppRoutes.LOGIN}><div className={styles.login}><button className={styles.buttonLogin} type="button">Login</button></div></Link>
    )
}
export const ButtonGoHome = ()=>{
    return(
        <Link to={AppRoutes.MAIN}><button className="link_404" type="button">Go to Home</button></Link>
    )
}