import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import User from "./User/User";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <User name={d.name} id={d._id} avatar={d.avatar} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'newMessageBody'} placeholder={'enter message'}/>
        </div>
        <div>
            <button>Add dialog</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);

export default Dialogs;