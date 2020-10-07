import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return(
        <div className={styles.background}>
    
        <div>
            <img src={props.profile.photoUrl} />
            <ProfileStatusWithHooks status={'Hello!!!'}/>
            // status=props.status updateStatus=props.updateStatus
        </div>
        </div>
    )
}

export default ProfileInfo;