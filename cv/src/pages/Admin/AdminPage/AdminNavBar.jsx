import nav from "../../Demo/Navbar.module.scss";
import {ButtonLogOut} from "../../../components/HOC/RouteHOC";
export const AdminNavBar = ({initialized,setInitialized})=>{
    return(
        <div className={nav.navbar}>
            <div className={nav.text}>My CV Maker</div>
            <div className={nav.buttons}>
                <ButtonLogOut initialized={initialized} setInitialized={setInitialized}/>
            </div>
        </div>
    )
}