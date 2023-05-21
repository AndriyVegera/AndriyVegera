import styles from "./Edit.module.scss"
import {useSelector} from "react-redux";
const Edit = ()=> {
    const generalInfo = useSelector((state) => state.user.generalInfo);
    // const data = useSelector()//redux{
    // const [formValue, setFormValue useState///null
// generalInfo:{
//     name:
//     fullname://
// }

//     useEffect(()=>{
// setGeneralFormValue(data.generalInfo)
// setSkillsFormValue(data.skills)
// setEducationlFormValue(data.education)
//     }, [data])

    // skills:[
    //   'A', 'B', 'C', ''
    // ]
// div skills
//     {formValue.skills.map(skill, idx =>
//     <input>
//         value={skill}
//         <button onClick={()=> {
//             const skills = [...formValue.skills]
//             skills.splice(idx, 1)
//             setSkillsFormValue(skills)
//         }}>Delete</button>
//     </input>
//     )}
//     button Add
//     ()=> {
//     const skills = [...formValue.skills]
//       skills.push('')
//         setSkillsFormValue(skills)
//     }
//
//     ()=> sendData(
//       {
//           skills: skillsFormValue,
//           generalInfo: giFV
//       }
//     )
// cv/:userId
    return(
        <div className={styles.general}>
            {/*{!formValue ? <Loader /> : */}
            <div className={styles.container}>
                <div className={styles.profile}>
                    <div>
                        <div>
                            <img className={styles.img} src="https://st4.depositphotos.com/4678277/28917/i/600/depositphotos_289173464-stock-photo-close-up-photo-amazing-he.jpg" alt="sad"/>
                        </div>
                    </div>
                    <div className={styles.profile_info}>
                        <h1>
                             <span className={styles.profile_name_firstName}>
                                {generalInfo.firstName}
                            </span>
                            <div>
                                <input className={styles.input} type="text" placeholder="Surname"/>
                            </div>
                            <span className={styles.profile_name_secondName}>
                                {generalInfo.secondName}
                            </span>
                            <div>
                                <input className={styles.input} type="text" placeholder="Name"/>
                            </div>
                        </h1>
                        <p className={styles.profile_title}>{generalInfo.profileTitle}</p>
                        <div>
                            <input className={styles.input} type="text" placeholder="Position"/>
                        </div>
                        <p className={styles.description}>{generalInfo.description}</p>
                        <div>
                            <input className={styles.input} type="text" placeholder="Info"/>
                        </div>
                    </div>
                </div>
                <div className={styles.group1}>
                    <div className="skills">
                        <h3 className={styles.title}>Skills</h3>
                        <ul className={styles.skills_list}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Git</li>
                        </ul>
                        <div>
                            <input className={styles.input} type="text" placeholder="Skills"/>
                            <button>Add</button>
                        </div>
                    </div>
                    <div className="languages">
                        <h3 className={styles.title}>Languages</h3>
                        <ul className={styles.languages_list}>
                            <li>Ukrainian</li>
                            <li>English</li>
                        </ul>
                        <div>
                            <input className={styles.input} type="text" placeholder="Languages"/>
                            <button>Add</button>
                        </div>
                    </div>
                    <div className="education">
                        <h3 className={styles.title}>Education</h3>
                        <div className="education_list">
                            <p className={styles.education_list_year}> September 2009 - May 2018</p>
                            <input className={styles.input} type="text" placeholder="Education Year"/>
                            <p className={styles.education_list_text}>Vinnychky gymnasium of Davydivska village council of Lviv district</p>
                            <input className={styles.input} type="text" placeholder="Education Text"/>
                        </div>
                        <button>Add</button>
                    </div>
                    <div className="certification">
                        <h3 className={styles.title}>Courses</h3>
                        <div className="courses_list">
                            <p className={styles.courses_list_year}>September 2022 - May 2023</p>
                            <input className={styles.input} type="text" placeholder="Courses Year"/>
                            <p className={styles.courses_list_text}>Frontend developer - Logos</p>
                            <input className={styles.input} type="text" placeholder="Courses Text"/>
                        </div>
                        <button>Add</button>
                    </div>
                </div>
                <div className={styles.group2}>
                    <div className="personalData">
                        <h3 className={styles.title}>Personal data</h3>
                        <div className="personalData_list">
                            <p className={styles.personalData_address}>Village of Vynnychki, Lviv region 81150</p>
                            <input className={styles.input} type="text" placeholder="Address"/>
                            <p className={styles.personalData_phone}>+380631894170</p>
                            <input className={styles.input} type="text" placeholder="Phone number"/>
                            <p className={styles.personalData_dateOfBrh}>07-12-2003</p>
                            <input className={styles.input} type="text" placeholder="Date of Birthday"/>
                            <p className={styles.personalData_email}>vegeraandrij@gmail.com</p>
                            <input className={styles.input} type="text" placeholder="Email Address"/>
                        </div>
                        <button>Save</button>
                    </div>
                    <div className="interests">
                        <h3 className={styles.title}>Interests</h3>
                        <ul className={styles.interests_list}>
                            <li>Football</li>
                            <li>Computer games</li>
                            <li>Volleyball</li>
                        </ul>
                        <div>
                            <input className={styles.input} type="text" placeholder="Interest"/>
                            <button>Add</button>
                        </div>
                    </div>
                    <div className="social_networks">
                        <h3 className={styles.title}>Social Networks</h3>
                        <ul className={styles.socialNetworks_list}>
                            <li>Instagram</li>
                            <li>Telegram</li>
                            <li>Steam</li>
                            <li>Viber</li>
                            <li>Twitch</li>
                            <li>Discord</li>
                            <li>Tiktok</li>
                        </ul>
                        <div>
                            <input className={styles.input} type="text" placeholder="Social Network"/>
                            <button>Add</button>
                        </div>
                    </div>
                    <div className="expirience">
                        <h3 className={styles.title}>Experience</h3>
                        <div className="experience_list">
                            <p className={styles.experience_list_year}>April 2023</p>
                            <input className={styles.input} type="text" placeholder="Experience Year"/>
                            <p className={styles.experience_list_text}>No work experience</p>
                            <input className={styles.input} type="text" placeholder="Experience Text"/>
                        </div>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit;
