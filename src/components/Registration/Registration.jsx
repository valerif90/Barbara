import React from "react";
import {Field} from "redux-form";
import styles from "../Common/FormsControls/FormsControls.module.css";



            // <div>
            //     <Field placeholder={'password'} name={'password'} type={'password'}
            //            validate={[required]}
            //            component={Input}/>
            // </div>
            // <div>
            //     <Field  name={'rememberMe'} type={'checkbox'} component={Input}/> remember me
            // </div>
            // {error && <div className={styles.formSummaryError}>
            //     {error}
            // </div>}
            // <div>
            //     <button>Registration</button>
            // </div>



const Registration = (props) => {
    return (
        <div>
            <form action="">
                <input type="text" placeholder={'email'} name={'email'}/>
                <input type="text" placeholder={'password'} name={'password'} type={'password'}/>
                <input type="text" placeholder={'name'} name={'name'}/>
                <button onClick={props.postUser}>Registration</button>
            </form>

        </div>
    )
}

export default Registration;