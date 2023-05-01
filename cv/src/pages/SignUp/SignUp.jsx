import signUp from './SignUp.module.scss'
import {Form, Button, Schema, ButtonToolbar} from 'rsuite';
import React from "react";
const TextField = (props) => {
    const {name, accepter, placeholder, ...rest} = props;
    return (
        <Form.Group controlId={signUp.form}>
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
    verifyPassword: StringType()
        .addRule((value, data) => {
            console.log(data);
            return value === data.password;
        }, 'The two passwords do not match')
        .isRequired('This field is required.')
});

const SignUp = ({handleSignUp}) => {
    const formRef = React.useRef();
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
        verifyPassword: ''
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        console.log('onSubmit', formValue);
        handleSignUp(formValue);
    };

    return (
        <div className={signUp.body}>
            <div className={signUp.container}>
                <div className={signUp.image}>
                    <div className={signUp.formBox}>
                        <div className="form">
                            <h2>Sign Up</h2>
                            <Form
                                model={model}
                                ref={formRef}
                                onChange={setFormValue}
                                formValue={formValue}
                            >
                                <TextField name="email" placeholder="Email" label="Email"/>
                                <TextField name="password" placeholder="Password" type="password" autoComplete="off" />
                                <TextField
                                    name="verifyPassword"
                                    placeholder="VerifyPassword"
                                    type="password"
                                    autoComplete="off"
                                />
                                <ButtonToolbar>
                                    <Button className={signUp.buttonLogin} appearance="primary" type="submit" onClick={handleSubmit}>
                                        Sign Up
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

export default SignUp;