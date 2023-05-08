import styles from './Demo.module.scss'
import {NavBar} from "./Navbar";
import {ResumeInfo} from "./ResumeInfo";
const Demo = ()=>{
    return(
        <>
            <NavBar/>
        <div className={styles.general}>
            <ResumeInfo/>
        </div>
        </>
    )
}
export default Demo;