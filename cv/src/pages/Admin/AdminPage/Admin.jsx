import style from './Admin.module.scss'
import AdminHOC from "../../../components/HOC/AdminHOC";
const Admin = ()=>{
    return(
        <div className={style.editSave}>
            <AdminHOC/>
        </div>
    )
}
export default Admin;