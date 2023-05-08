import style from './Admin.module.scss'
import AdminHOC from "../../../components/HOC/AdminHOC";
import {AdminNavBar} from "./AdminNavBar";
const Admin = ()=>{
    return(
        <>
            <AdminNavBar/>
            <div className={style.editSave}>
                <AdminHOC/>
            </div>
        </>
    )
}
export default Admin;