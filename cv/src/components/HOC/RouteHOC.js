import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";
import styles from "../../pages/Demo/Demo.module.scss";

export const ButtonDemoLink = ()=>{
    return(
        <Link to={AppRoutes.LOGIN}><div className={styles.login}><button className={styles.buttonLogin} type="button">Login</button></div></Link>
    )
}