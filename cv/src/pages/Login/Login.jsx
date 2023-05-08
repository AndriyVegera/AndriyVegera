import React from 'react';
import { Form, Button, ButtonToolbar, Schema } from 'rsuite';
import login from "./Login.module.scss";


const TextField = (props) => {
    const {name, accepter, placeholder, ...rest} = props;
    return (
        <Form.Group controlId={login.form}>
            <Form.Control name={name} accepter={accepter} placeholder={placeholder} {...rest} />
        </Form.Group>
    );
};
const {StringType} = Schema.Types;

const model = Schema.Model({
    email: StringType()
        .isEmail('Please enter a valid email address.')
        .isRequired('This field is required.'),

    password: StringType()
        .isRequired('This field is required.')
        .minLength(6, 'Minimum 6 characters required')
        .containsUppercaseLetter('Must contain uppercase English characters'),
});

const Login = ({handleSignIn}) => {
    const formRef = React.useRef();
    // const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        handleSignIn(formValue);
    };

    return (
        <div className={login.body}>
            <div className={login.container}>
                <div className={login.image}>
                    <div className={login.formBox}>
                        <div className="form">
                            <h2>Login</h2>
                            <Form
                                model={model}
                                ref={formRef}
                                onChange={setFormValue}
                                formValue={formValue}
                            >
                                <TextField name="email" placeholder="Email" label="Email"/>
                                <TextField name="password" placeholder="Password" type="password" autoComplete="off" />
                                <ButtonToolbar>
                                    <Button className={login.buttonLogin} appearance="primary" type="submit" onClick={handleSubmit}>
                                        Login
                                    </Button>
                                </ButtonToolbar>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;