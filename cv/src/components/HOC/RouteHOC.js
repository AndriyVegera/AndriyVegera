import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";
import styles from "../../pages/Demo/Demo.module.scss";
import "./../../pages/Error/Error.css"
import {useState} from "react";
export const ButtonDemoLink = ()=>{
    return(
        <Link to={AppRoutes.SIGNUP}><div className={styles.login}><button className={styles.buttonLogin} type="button">Sign In</button></div></Link>
    )
}
export const ButtonGoHome = ()=>{
    return(
        <Link to={AppRoutes.MAIN}><button className="link_404" type="button">Go to Home</button></Link>
    )
}
export const ButtonEdit = ()=>{
    return(
        <div className={styles.login}>
            <button className={styles.buttonLogin}>Edit</button>
        </div>
    )
}