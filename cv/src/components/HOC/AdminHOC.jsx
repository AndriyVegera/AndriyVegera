import {useState} from "react";
import styles from './../../pages/Admin/AdminPage/Admin.module.scss'
import Edit from "../../pages/Admin/Edit/Edit";
import {ResumeInfo} from "../../pages/Demo/ResumeInfo";
import {collection} from 'firebase/firestore'
const AdminHOC = ()=>{
    const [isEditMode,setIsEditMode] = useState(false);
    const addInfo = ()=>{
        const collectionRef = collection();
    }
    const getInfo = ()=>{

    }
    const updateInfo = ()=>{

    }
    const deleteInfo = ()=>{

    }
    const Swap = ()=>{
        setIsEditMode(((prevState)=>!prevState));
    }
    return(
        <div>
            <button className={styles.buttonEditSave} onClick={Swap}>{isEditMode?"Save":"Edit"}</button>
            {isEditMode?<Edit/>:<ResumeInfo/>}
        </div>
    )
}
export default AdminHOC;