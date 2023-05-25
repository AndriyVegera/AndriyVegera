import styles from "./Edit.module.scss"
import {ListInput} from "../../../components/EditInputs/ListInput";
import {useEffect, useState} from "react";
const Edit = ({data, handleGIEEdit, addInfo})=> {
    // const data = useSelector((state) => state.user);
    const [skillsFormValue,setSkillsFormValue]=useState(data.skills);
    const [languagesFormValue,setLanguagesFormValue]=useState(data.languages);
    const [interestsFormValue,setInterestsFormValue]=useState(data.interests);
    const [socialFormValue,setSocialFormValue]=useState(data.socialNetworks);
    const [generalInfo, setGeneralInfo] = useState(data.generalInfo);
    const [education, setEducation] = useState(data.education)
    const [courses,setCourses]= useState(data.courses);
    const [personalData, setPersonalData]=useState(data.personalData)
    const [experience,setExperience] = useState(data.experience)
    // useEffect(()=>
    // {
    //     addInfo();
    // },[])
    useEffect(()=>{
        setSkillsFormValue(data.skills)
        setLanguagesFormValue(data.languages)
        setInterestsFormValue(data.interests)
        setSocialFormValue(data.socialNetworks)
    }, [data])

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
    const handleInputChange = (key,value)=>{
        setGeneralInfo((prevState)=>{
                return{
                    ...prevState,
                    [key]:value
                }
            }
        )
        setPersonalData((prevState)=>{
                return{
                    ...prevState,
                    [key]:value
                }
            }
        )
    }
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
                                {data.generalInfo.firstName}
                            </span>
                            <div>
                                <input value={generalInfo.firstName} className={styles.input} type="text" placeholder="Surname" onChange={(e)=>handleInputChange('firstName', e.target.value)}/>
                            </div>
                            <span className={styles.profile_name_secondName}>
                                {data.generalInfo.secondName}
                            </span>
                            <div>
                                <input value={generalInfo.secondName} className={styles.input} type="text" placeholder="Name" onChange={(e)=>handleInputChange('secondName', e.target.value)}/>
                            </div>
                        </h1>
                        <p className={styles.profile_title}>{data.generalInfo.profileTitle}</p>
                        <div>
                            <input value={generalInfo.profileTitle} className={styles.input} type="text" placeholder="Profile Title" onChange={(e)=>handleInputChange('profileTitle', e.target.value)}/>
                        </div>
                        <p className={styles.description}>{data.generalInfo.description}</p>
                        <div>
                            <input value={generalInfo.description} className={styles.input} type="text" placeholder="Description" onChange={(e)=>handleInputChange('description', e.target.value)}/>
                        </div>
                    </div>
                    <button className={styles.buttonSaveInf} type="button" onClick={()=>handleGIEEdit(generalInfo,skillsFormValue,languagesFormValue,education,courses,personalData,interestsFormValue,socialFormValue,experience)}>Save Info</button>
                </div>
                <div className={styles.group1}>
                    <div className="skills">
                        <h3 className={styles.title}>Skills</h3>
                        <ul className={styles.skills_list}>
                            {skillsFormValue.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <ListInput formValue={skillsFormValue} setFormValue={setSkillsFormValue} placeholder="New Skill"/>
                    </div>
                    <div className="languages">
                        <h3 className={styles.title}>Languages</h3>
                        <ul className={styles.languages_list}>
                            {languagesFormValue.map((languages, index) => (
                                <li key={index}>{languages}</li>
                            ))}
                        </ul>
                        <ListInput formValue={languagesFormValue} setFormValue={setLanguagesFormValue} placeholder="New Languages"/>
                    </div>
                    <div className="education">
                        <h3 className={styles.title}>Education</h3>
                        <div className="education_list">
                            {data.education.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.education_list_year}>{item.educationYear}</p>
                                    <input value={education[index].educationYear} className={styles.input} type="text" placeholder="Education Year"                         onChange={(e) => {
                                        const updatedSkills = [...education];
                                        updatedSkills[index] = e.target.value;
                                        setEducation(updatedSkills);
                                    }}/>
                                    <p className={styles.education_list_text}>{item.educationText}</p>
                                    <input value={education[index].educationText} className={styles.input} type="text" placeholder="Education Text"                         onChange={(e) => {
                                        const updatedSkills = [...education];
                                        updatedSkills[index] = e.target.value;
                                        setEducation(updatedSkills);
                                    }}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="certification">
                        <h3 className={styles.title}>Courses</h3>
                        <div className="courses_list">
                            {data.courses.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.courses_list_year}>{item.coursesYear}</p>
                                    <input value={courses[index].coursesYear} className={styles.input} type="text" placeholder="Courses Year"                         onChange={(e) => {
                                        const updatedSkills = [...courses];
                                        updatedSkills[index] = e.target.value;
                                        setCourses(updatedSkills);
                                    }}/>
                                    <p className={styles.courses_list_text}>{item.coursesList}</p>
                                    <input value={courses[index].coursesList} className={styles.input} type="text" placeholder="Courses Text"                         onChange={(e) => {
                                        const updatedSkills = [...courses];
                                        updatedSkills[index] = e.target.value;
                                        setCourses(updatedSkills);
                                    }}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.group2}>
                    <div className="personalData">
                        <h3 className={styles.title}>Personal data</h3>
                        <div className="personalData_list">
                            <p className={styles.personalData_address}>{data.personalData.address}</p>
                            <input value={personalData.address} className={styles.input} type="text" placeholder="Address" onChange={(e)=>handleInputChange('address', e.target.value)}/>
                            <p className={styles.personalData_phone}>{data.personalData.phoneNumber}</p>
                            <input value={personalData.phoneNumber} className={styles.input} type="text" placeholder="Phone number" onChange={(e)=>handleInputChange('phoneNumber', e.target.value)}/>
                            <p className={styles.personalData_dateOfBrh}>{data.personalData.dateOfBrh}</p>
                            <input value={personalData.dateOfBrh} className={styles.input} type="text" placeholder="Date of Birhday" onChange={(e)=>handleInputChange('dateOfBrh', e.target.value)}/>
                            <p className={styles.personalData_email}>{data.personalData.email}</p>
                            <input value={personalData.email} className={styles.input} type="text" placeholder="Email Address" onChange={(e)=>handleInputChange('email', e.target.value)}/>
                        </div>
                    </div>
                    <div className="interests">
                        <h3 className={styles.title}>Interests</h3>
                        <ul className={styles.interests_list}>
                            {interestsFormValue.map((interests, index) => (
                                <li key={index}>{interests}</li>
                            ))}
                        </ul>
                        <ListInput formValue={interestsFormValue} setFormValue={setInterestsFormValue} placeholder="New interest"/>
                    </div>
                    <div className="social_networks">
                        <h3 className={styles.title}>Social Networks</h3>
                        <ul className={styles.socialNetworks_list}>
                            {socialFormValue.map((social, index) => (
                                <li key={index}>{social}</li>
                            ))}
                        </ul>
                        <ListInput setFormValue={setSocialFormValue} formValue={socialFormValue} placeholder="New social"/>
                    </div>
                    <div className="expirience">
                        <h3 className={styles.title}>Experience</h3>
                        <div className="experience_list">
                            {data.experience.map((item, index) => (
                                <div key={index}>
                                    <p className={styles.courses_list_year}>{item.experienceYear}</p>
                                    <input value={experience[index].experienceYear} className={styles.input} type="text" placeholder="Experience Year"                         onChange={(e) => {
                                        const updatedSkills = [...experience];
                                        updatedSkills[index] = e.target.value;
                                        setExperience(updatedSkills);
                                    }}/>
                                    <p className={styles.courses_list_text}>{item.experienceText}</p>
                                    <input value={experience[index].experienceText} className={styles.input} type="text" placeholder="Experience"                         onChange={(e) => {
                                        const updatedSkills = [...experience];
                                        updatedSkills[index] = e.target.value;
                                        setExperience(updatedSkills);
                                    }}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit;
