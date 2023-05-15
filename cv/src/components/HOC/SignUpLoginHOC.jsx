import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";

const SignUpLoginHOC = ({Component})=>{
    onAuthStateChanged(auth, (currentUser)=>console.log(currentUser));
    const navigate = useNavigate()
     const handleSignIn = async (formValue)=>{
        try {
            const response = await signInWithEmailAndPassword(auth, formValue.email, formValue.password );
            response?.user?.uid ? navigate(AppRoutes.ADMIN):navigate(AppRoutes.SIGNUP);
        }
        catch (e){

        }
    }
    const handleSignUp = async (formValue)=>{
        try {
            const response = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password );
            const userInfo = {
                uid:response?.user?.uid,
                email:formValue.email,
                password:formValue.password
            }
            localStorage.setItem('user',JSON.stringify(userInfo));
            response?.user?.uid && navigate(AppRoutes.LOGIN);
        }
        catch (e){

        }
    }
    return <Component
        handleSignIn={handleSignIn}
        handleSignUp = {handleSignUp}
        />
}
export default SignUpLoginHOC;