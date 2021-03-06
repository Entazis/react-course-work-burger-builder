import React, {Component} from 'react';
import classes from './Auth.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { checkValidity } from '../../shared/utils';

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
                    type: 'password',
                    placeholder: '*******',
                },
                value: '',
                displayName: 'Password',
                validation: {
                    required: true,
                    minLength: 6
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
            this.props.signUpUser(this.state.authForm.email.value, this.state.authForm.password.value);
        } else {
           this.props.logInUser(this.state.authForm.email.value, this.state.authForm.password.value);
        }

    };

    onLogOutHandler = () => {
        this.props.logOutUser();
    };

    onFormSwitchHandler = () => {
        this.setState((prevState) => ({isSignUp: !prevState.isSignUp}));
    };

    onChangeHandler = (event, formKey) => {
        const authForm = {...this.state.authForm};
        const formElement = {...authForm[formKey]};

        formElement.value = event.target.value;
        formElement.isValid = checkValidity(formElement.value, formElement.validation);
        formElement.isTouched = true;
        authForm[formKey] = formElement;

        let isFormValid = true;
        for (let inputIdentifier in formElement) {
            if ( formElement.hasOwnProperty(inputIdentifier) ) {
                isFormValid = formElement[inputIdentifier].valid && isFormValid;
            }
        }

        this.setState({authForm: authForm, formIsValid: isFormValid});
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
        let submitButton = (!this.props.user) ? <Button type={'Success'}>Login</Button> : null;
        let logOutButton = (this.props.user) ? <Button type={'Danger'} clicked={this.onLogOutHandler}>Logout</Button>: null;

        if (this.state.isSignUp) {
            switchButton = <Button type={'Danger'} clicked={this.onFormSwitchHandler}>Switch to Log In</Button>;
            title = <h2>Sign Up</h2>;
            submitButton = <Button type={'Success'}>Signup</Button>;
            logOutButton = null;
        }

        let authRedirect = null;
        if (this.props.user) {
            authRedirect = <Redirect to={this.props.redirectPath}/>
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {this.props.loading ? <Spinner /> :
                    <div>
                        {this.props.error ? <p style={{color: 'red'}}>Something went wrong: {this.props.error.message}</p> : null}
                        {title}
                        <form onSubmit={this.onAuthHandler}>
                            {inputFields}
                            {submitButton}
                        </form>
                        {logOutButton}
                        {switchButton}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        loading: state.auth.loading,
        error: state.auth.error,
        redirectPath: state.auth.redirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (email, password) => dispatch(actions.authSignUp(email, password)),
        logInUser: (email, password) => dispatch(actions.authLogIn(email, password)),
        logOutUser: () => dispatch(actions.authLogOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);