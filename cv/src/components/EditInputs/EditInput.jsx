import {useEffect, useState} from "react";
import styles from "../../pages/Admin/Edit/Edit.module.scss";

export const EditSkillsInput = ({data,setFormValue,formValue})=>{
    const [inputValue, setInputValue] = useState('');
    useEffect(()=>{
        setFormValue(data.skills)
    },[data,setFormValue])
    return(
        <>
        <div>
            {formValue.map((skill, idx) => (
                <div key={idx}>
                    <input
                        onChange={(e) => {
                            const updatedSkills = [...formValue];
                            updatedSkills[idx] = e.target.value;
                            setFormValue(updatedSkills);
                        }}
                        value={skill}
                        className={styles.inputList}
                        type="text"
                        placeholder="New skill"
                         />
                    <button className={styles.buttonDelete} onClick={() => {
                        const updatedSkills = [...formValue];
                        updatedSkills.splice(idx, 1);
                        setFormValue(updatedSkills);
                    }}>Delete</button>
                </div>
            ))}
        </div>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={styles.inputList} type="text" placeholder="New skill"/>
                <button className={styles.buttonAdd} onClick={() => {
                    const value = inputValue;
                    const skills = [...formValue];
                    value === '' ? alert("Введіть правильно"): skills.push(value);
                    setFormValue(skills);
                    setInputValue('');
                }}>Add</button>
            </div>
        </>
    )
}
export const EditLanguagesInput = ({data,setLanguagesFormValue,languagesFormValue})=>{
    const [inputValue, setInputValue] = useState('');
    useEffect(()=>{
        setLanguagesFormValue(data.languages)
    },[data,setLanguagesFormValue])
    return(
        <>
            <div>
                {languagesFormValue.map((languages, idx) => (
                    <div key={idx}>
                        <input
                            value={languages}
                            className={styles.inputList}
                            type="text"
                            placeholder="New language"
                            onChange={(e) => {
                                const updatedSkills = [...languagesFormValue];
                                updatedSkills[idx] = e.target.value;
                                setLanguagesFormValue(updatedSkills);
                            }} />
                        <button className={styles.buttonDelete} onClick={() => {
                            const updatedSkills = [...languagesFormValue];
                            updatedSkills.splice(idx, 1);
                            setLanguagesFormValue(updatedSkills);
                        }}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={styles.inputList} type="text" placeholder="New skill"/>
                <button className={styles.buttonAdd} onClick={() => {
                    const value = inputValue;
                    const languages = [...languagesFormValue];
                    value === '' ? alert("Введіть правильно"): languages.push(value);
                    setLanguagesFormValue(languages);
                    setInputValue('');
                }}>Add</button>
            </div>
        </>
    )
}
export const EditInterestsInput = ({data,setInterestsFormValue,interestsFormValue})=>{
    const [inputValue, setInputValue] = useState('');
    useEffect(()=>{
        setInterestsFormValue(data.interests)
    },[data,setInterestsFormValue])
    return(
        <>
            <div>
                {interestsFormValue.map((interests, idx) => (
                    <div key={idx}>
                        <input
                            value={interests}
                            className={styles.inputList}
                            type="text"
                            placeholder="New interest"
                            onChange={(e) => {
                                const updatedSkills = [...interestsFormValue];
                                updatedSkills[idx] = e.target.value;
                                setInterestsFormValue(updatedSkills);
                            }} />
                        <button className={styles.buttonDelete} onClick={() => {
                            const updatedSkills = [...interestsFormValue];
                            updatedSkills.splice(idx, 1);
                            setInterestsFormValue(updatedSkills);
                        }}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={styles.inputList} type="text" placeholder="New skill"/>
                <button className={styles.buttonAdd} onClick={() => {
                    const value = inputValue;
                    const interest = [...interestsFormValue];
                    value === '' ? alert("Введіть правильно"): interest.push(value);
                    setInterestsFormValue(interest);
                    setInputValue('');
                }}>Add</button>
            </div>
        </>
    )
}
export const EditSocialInput = ({data,setSocialFormValue,socialFormValue})=>{
    const [inputValue, setInputValue] = useState('');
    useEffect(()=>{
        setSocialFormValue(data.socialNetworks)
    },[data,setSocialFormValue])
    return(
        <>
            <div>
                {socialFormValue.map((social, idx) => (
                    <div key={idx}>
                        <input
                            value={social}
                            className={styles.inputList}
                            type="text"
                            placeholder="New interest"
                            onChange={(e) => {
                                const updatedSkills = [...socialFormValue];
                                updatedSkills[idx] = e.target.value;
                                setSocialFormValue(updatedSkills);
                            }} />
                        <button className={styles.buttonDelete} onClick={() => {
                            const updatedSkills = [...socialFormValue];
                            updatedSkills.splice(idx, 1);
                            setSocialFormValue(updatedSkills);
                        }}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={styles.inputList} type="text" placeholder="New skill"/>
                <button className={styles.buttonAdd} onClick={() => {
                    const value = inputValue;
                    const social = [...socialFormValue];
                    value === '' ? alert("Введіть правильно"): social.push(value);
                    setSocialFormValue(social);
                    setInputValue('');
                }}>Add</button>
            </div>
        </>
    )
}