import React, {Component} from 'react';
import classes from './Auth.module.css';
import Input
    from '../../components/UI/Input/Input';
import Button
    from '../../components/UI/Button/Button';

class Auth extends Component {
    state = {
        isSignUp: false,
        authForm: {
            email: {
                inputType: 'input',
                config: {
                    type: 'email',
                    placeholder: 'test@test.com'
                },
                value: '',
                displayName: 'Email',
                validation: {
                    required: true,
                    isEmail: true
                },
                isValid: false,
                isTouched: false
            },
            password: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: '*******'
                },
                value: '',
                displayName: 'Password',
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false
            }
        },
        isFormValid: false
    };

    onAuthHandler = (event) => {
        event.preventDefault();

        if (this.state.isSignUp) {

        } else {

        }

    };

    onFormSwitchHandler = () => {
        this.setState((prevState) => ({isSignUp: !prevState.isSignUp}));
    };

    render() {
        const form = this.state.authForm;
        const inputFields = Object.keys(form).map(formKey => {
            return (
                <Input
                    inputType={form[formKey].inputType}
                    config={form[formKey].config}
                    value={form[formKey].value}
                    key={formKey}
                    displayName={form[formKey].displayName}
                    invalid={!form[formKey].isValid}
                    shouldValidate={form[formKey].validation}
                    touched={form[formKey].isTouched}
                    changed={(event) => this.onChangeHandler(event, formKey)}/>
            )
        });

        let switchButton = <Button type={'Danger'} clicked={this.onFormSwitchHandler}>Switch to Sign Up</Button>;
        let title = <h2>Log In</h2>;
        if (this.state.isSignUp) {
            switchButton = <Button type={'Danger'} clicked={this.onFormSwitchHandler}>Switch to Log In</Button>;
            title = <h2>Sign Up</h2>
        }

        return (
            <div className={classes.Auth}>
                {title}
                <form onSubmit={this.onAuthHandler}>
                    {inputFields}
                    <Button type={'Success'}>Login</Button>
                </form>
                {switchButton}
            </div>
        );
    }
}

export default Auth;