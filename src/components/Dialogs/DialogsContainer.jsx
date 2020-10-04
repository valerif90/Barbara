import React from 'react';
import {Redirect} from "react-router-dom";
import {sendMessageCreator} from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
        dispatch(sendMessageCreator(newMessageBody));
        }
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs);