import {useEffect, useState} from "react";
import styles from './../../pages/Admin/AdminPage/Admin.module.scss'
import Edit from "../../pages/Admin/Edit/Edit";
import {ResumeInfo} from "../../pages/Demo/ResumeInfo";
import {collection, addDoc, onSnapshot, doc, setDoc} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL, deleteObject} from "firebase/storage";
import {db, storage} from "../../firebase/firebase";
import {useSelector} from "react-redux";
const AdminHOC = ()=>{
    const [uploading, setUploading] = useState(false);
    const [fileInfo, setFileInfo] = useState(null);
    const [previousImageName, setPreviousImageName] = useState('');
    const [newImage, setNewImage] = useState('');
    const [isEditMode,setIsEditMode] = useState(false);
    const authUser = JSON.parse(localStorage.getItem('user'));
    const mockData = useSelector((state)=>state.user);
    const [data, setData] = useState();
    const [isLoading,setIsLoading]=useState(true);
    const collectionRef = collection(db, authUser?.uid);
    useEffect(()=>{
        getInfo();
    },[])
    useEffect(()=> {
        data && setIsLoading(false);
    },[data])
    const addInfo = async ()=>{
        try {
            const docRef = await addDoc(collectionRef, mockData);
            docRef?.id && alert('good');
        }catch (e){

        }
    }
    const getInfo = ()=>{
        onSnapshot(collectionRef, (snapshot)=>{
           const data = snapshot.docs.map((doc)=>({...doc.data(),id:doc.id}));
           setData(data[0]);
        })
    }
    const updateInfo = async (generalInfo,skills,languages,education,courses,personalData,interests,socialNetworks,experience)=>{
        const docRef = doc(db,authUser?.uid, data?.id);
        await setDoc(docRef, {
            ...data,
            generalInfo:{
                ...generalInfo,
                ...newImage
            },
            skills,
            languages,
            education,
            courses,
            personalData,
            interests,
            socialNetworks,
            experience
        })
        previousImageName && deleteImageFromStorage();
        setIsEditMode(false)
    }
    const deleteImageFromStorage = (imageName = previousImageName) => {
        console.log(imageName)
        const storageRef = ref(storage, `/${authUser?.uid}/${imageName}`)
        deleteObject(storageRef)
            .then(() => {
                setPreviousImageName('')
                setNewImage({})
            })
            .catch((e) => console.log("File delete Error"))
    }
    const handleFileUpload = async (file)=>{
        setUploading(true);
        const storageRef = ref(storage, `/${authUser?.uid}/${file.name}`)
        const uploadData = uploadBytesResumable(storageRef, file)

        uploadData.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            },
            (error) => {
                setUploading(false);
                setFileInfo('')
            },
            () => {
                getDownloadURL(uploadData.snapshot.ref)
                    .then(url => {
                        setUploading(false);
                        setPreviousImageName(data?.generalInfo?.imageName)
                        setNewImage({
                            imageUrl: url,
                            imageName: file.name,
                        })
                    })
            }
        )
    }
    const Swap = ()=>{
        setIsEditMode(((prevState)=>!prevState));
    }
    return(
        <div>
            <button className={styles.buttonEditSave} onClick={Swap}>{isEditMode?"Save":"Edit"}</button>
            {isEditMode&&data?
                <Edit addInfo={addInfo} data={data} handleGIEEdit={updateInfo} setFileInfo={setFileInfo} fileInfo={fileInfo} handleFileUpload={handleFileUpload} uploading={uploading}/>
                :isLoading?
                    <h1>Loading</h1>
                    :data?
                    <ResumeInfo data={data}/>
                        : <h1>No data</h1>
            }
        </div>
    )
}
export default AdminHOC;