import style from './Admin.module.scss'
import AdminHOC from "../../../components/HOC/AdminHOC";
import {AdminNavBar} from "./AdminNavBar";
import {useState} from "react";
const Admin = ()=>{
    const [initialized, setInitialized] = useState(false);
    return(
        <>
            <AdminNavBar initialized={initialized} setInitialized={setInitialized}/>
            <div className={style.editSave}>
                <AdminHOC initialized={initialized} setInitialized={setInitialized}/>
            </div>
        </>
    )
}
export default Admin;