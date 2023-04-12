import login from './Login.module.scss'
import { Form, Button, Schema } from 'rsuite';
const Login = ()=>{
    const emailRule = Schema.Types.StringType().isEmail().isRequired('Please enter a valid email address.');
    const passwordRule = Schema.Types.StringType().isRequired('Please enter a valid password.').minLength(6, 'Minimum 6 characters required').containsUppercaseLetter('Must contain uppercase English characters').containsLowercaseLetter('Must contain lower English characters');
    const verifyPasswordRule = Schema.Types.StringType().addRule((value,data)=>{
        return value!==data.password?false:true
    },'The two passwords do not match').isRequired('This field is required.');
    function EmailField() {
        return (
            <Form.Group controlId={login.email}>
                <Form.Control name="email" rule={emailRule} placeholder="Email"/>
            </Form.Group>
        );
    }
    function PasswordField() {
        return (
            <Form.Group controlId={login.password}>
                <Form.Control name="password" rule={passwordRule} placeholder="Password"/>
            </Form.Group>
        );
    }
    function VerifyPasswordField() {
        return (
            <Form.Group controlId={login.verifyPassword}>
                <Form.Control name="verifyPassword" rule={verifyPasswordRule} placeholder="Verify Password" />
            </Form.Group>
        );
    }
    return(
        <div className={login.body}>
            <div className={login.container}>
                <div className={login.image}>
                    <div className={login.formBox}>
                        <div className="form">
                            <h2>Login</h2>
                            <Form>
                                <EmailField />
                                <PasswordField/>
                                <VerifyPasswordField/>
                                <Button className={login.buttonLogin} appearance="primary" type="submit" >
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;