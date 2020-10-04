import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../validators/validators";
import {connect} from "react-redux";
import {login} from '../../redux/auth_reducer';
import Redirect from "react-router-dom";
import styles from '../Common/FormsControls/FormsControls.module.css'


const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'email'} name={'email'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} type={'password'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field  name={'rememberMe'} type={'checkbox'} component={Input}/> remember me
                </div>
                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm ({ form: 'login' } )(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    // if (props.isAuth) {
    //     return <Redirect to={'/profile'}/>
    // }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);