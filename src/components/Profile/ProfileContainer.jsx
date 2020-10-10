import React from "react";
import Profile from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile_reducer'
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render () {
    return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} />
        )
    }
};

let AuthRedirectComponent = (props) => {
    return <ProfileContainer {...props} />
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter (AuthRedirectComponent);

export default connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}) (WithUrlDataContainerComponent);