import nav from './Navbar.module.scss'
import {ButtonDemoLogin, ButtonDemoSignUp} from "../../components/HOC/RouteHOC";
export const NavBar = ()=>{
    return(
        <div className={nav.navbar}>
            <div className={nav.text}>My CV Maker</div>
            <div className={nav.buttons}>
                <ButtonDemoSignUp/>
                <ButtonDemoLogin/>
            </div>
        </div>
    )
}