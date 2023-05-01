import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";

const SignUpLoginHOC = ({Component})=>{
    onAuthStateChanged(auth, (currentUser)=>console.log(currentUser));
    const navigate = useNavigate()
     const handleLogin = async (formValue)=>{
        try {
            const response = await signInWithEmailAndPassword(auth, formValue.email, formValue.password );
            console.log(response);
            response?.user?.uid && navigate(AppRoutes.ADMIN);
        }
        catch (e){

        }
    }
    const handleSignUp = async (formValue)=>{
        try {
            const response = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password );
            console.log(response);
            response?.user?.uid && navigate(AppRoutes.LOGIN);
        }
        catch (e){

        }
    }
    return <Component
        handleLogin={handleLogin}
        handleSignUp = {handleSignUp}
        />
}
export default SignUpLoginHOC;