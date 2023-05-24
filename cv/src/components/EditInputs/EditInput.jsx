import {useState} from "react";
import styles from "../../pages/Admin/Edit/Edit.module.scss";

export const EditInput = ({setFormValue,formValue})=>{
    const [inputValue, setInputValue] = useState('');
    return(
        <>
        <div>
            {formValue.map((item, idx) => (
                <div key={idx}>
                    <input
                        onChange={(e) => {
                            const updatedSkills = [...formValue];
                            updatedSkills[idx] = e.target.value;
                            setFormValue(updatedSkills);
                        }}
                        value={item}
                        className={styles.inputList}
                        type="text"
                        placeholder="New skill"
                         />
                    <button className={styles.buttonDelete} onClick={() => {
                        const updatedItem = [...formValue];
                        updatedItem.splice(idx, 1);
                        setFormValue(updatedItem);
                    }}>Delete</button>
                </div>
            ))}
        </div>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={styles.inputList} type="text" placeholder="New skill"/>
                <button className={styles.buttonAdd} onClick={() => {
                    const value = inputValue;
                    const item = [...formValue];
                    value === '' ? alert("Введіть правильно"): item.push(value);
                    setFormValue(item);
                    setInputValue('');
                }}>Add</button>
            </div>
        </>
    )
}