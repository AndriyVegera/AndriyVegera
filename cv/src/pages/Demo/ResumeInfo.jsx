import styles from './Demo.module.scss'
import {useSelector} from "react-redux";
export const ResumeInfo = ()=>{
    const generalInfo = useSelector((state) => state.user.generalInfo);
    const skills = useSelector((state)=>state.user.skills);
    const languages = useSelector((state)=>state.user.languages);
    const courses = useSelector((state)=>state.user.courses)
    const education = useSelector((state)=>state.user.education);
    const personalData = useSelector((state)=>state.user.personalData);
    const interests = useSelector((state)=>state.user.interests);
    const socialNetworks = useSelector((state)=>state.user.socialNetworks);
    const experience = useSelector((state)=>state.user.experience);
    // const dispatch = useDispatch();

    return(
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
                            <span className={styles.profile_name_secondName}>
                                {generalInfo.secondName}
                            </span>
                    </h1>
                    <p className={styles.profile_title}>{generalInfo.profileTitle}</p>
                    <p className={styles.description}>{generalInfo.description}</p>
                </div>
            </div>
            <div className={styles.group1}>
                <div className="skills">
                    <h3 className={styles.title}>Skills</h3>
                    <ul className={styles.skills_list}>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="languages">
                    <h3 className={styles.title}>Languages</h3>
                    <ul className={styles.languages_list}>
                        {languages.map((languages, index) => (
                            <li key={index}>{languages}</li>
                        ))}
                    </ul>
                </div>
                <div className="education">
                    <h3 className={styles.title}>Education</h3>
                    <div className="education_list">
                        {education.map((item, index) => (
                            <div key={index}>
                                <p className={styles.education_list_year}>{item.educationYear}</p>
                                <p className={styles.education_list_text}>{item.educationText}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="certification">
                    <h3 className={styles.title}>Courses</h3>
                    <div className="courses_list">
                        {courses.map((item, index) => (
                            <div key={index}>
                                <p className={styles.courses_list_year}>{item.coursesYear}</p>
                                <p className={styles.courses_list_text}>{item.coursesList}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.group2}>
                <div className="personalData">
                    <h3 className={styles.title}>Personal data</h3>
                    <div className="personalData_list">
                        <p className={styles.personalData_address}>{personalData.address}</p>
                        <p className={styles.personalData_phone}>{personalData.phoneNumber}</p>
                        <p className={styles.personalData_dateOfBrh}>{personalData.dateOfBrh}</p>
                        <p className={styles.personalData_email}>{personalData.email}</p>
                    </div>
                </div>
                <div className="interests">
                    <h3 className={styles.title}>Interests</h3>
                    <ul className={styles.interests_list}>
                        {interests.map((interests, index) => (
                            <li key={index}>{interests}</li>
                        ))}
                    </ul>
                </div>
                <div className="social_networks">
                    <h3 className={styles.title}>Social Networks</h3>
                    <ul className={styles.socialNetworks_list}>
                        {socialNetworks.map((socialNetworks, index) => (
                            <li key={index}>{socialNetworks}</li>
                        ))}
                    </ul>
                </div>
                <div className="expirience">
                    <h3 className={styles.title}>Experience</h3>
                    <div className="experience_list">
                        {experience.map((item, index) => (
                            <div key={index}>
                                <p className={styles.experience_list_year}>{item.experienceYear}</p>
                                <p className={styles.experience_list_text}>{item.experienceText}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}