import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";
import styles from "../../pages/Demo/Demo.module.scss";
import "./../../pages/Error/Error.css"
import {auth} from "../../firebase/firebase";
import {deleteUser} from "firebase/auth";
export const ButtonDemoSignUp = ()=>{
    return(
        <Link to={AppRoutes.SIGNUP}><div className={styles.signUp}><button className={styles.buttonLogin} type="button">Sign Up</button></div></Link>
    )
}
export const ButtonDemoLogin = ()=>{
    return(
        <Link to={AppRoutes.LOGIN}><div className={styles.login}><button className={styles.buttonLogin} type="button">Login</button></div></Link>
    )
}
export const ButtonGoHome = ()=>{
    return(
        <Link to={AppRoutes.MAIN}><button className="link_404" type="button">Go to Home</button></Link>
    )
}
export const ButtonLogOut = ()=>{
    const handleLogOut = async ()=>{
        try{
            let user = auth.currentUser;
            await deleteUser(user);
        }
        catch (e){
            console.log(e);
        }
    }
    return(
        <Link to={AppRoutes.MAIN}><div className={styles.login}><button onClick={handleLogOut} className={styles.buttonLogin} type="button">Log Out</button></div></Link>
    )
}