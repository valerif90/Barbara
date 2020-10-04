import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return(
        <div>
        <img src="https://i.gifer.com/APw5.gif" width={500}/>
        <div>
            <img src={props.profile.photoUrl} />
            <ProfileStatusWithHooks status={'Hello!!!'}/>
            // status=props.status updateStatus=props.updateStatus
        </div>
        </div>
    )
}

export default ProfileInfo;