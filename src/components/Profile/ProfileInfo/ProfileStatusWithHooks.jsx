import React, {useEffect, useState} from "react";
import Preloader from '../../Common/Preloader/Preloader'


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        // this.props.updateStatus(this.state.status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                { !editMode &&
                    <div>
                        <span onClick={ activateEditMode }>{props.status || '---'}</span>
                    </div>
                }
                { editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode }
                               value={status}/>
                    </div>
                }
            </div>
        )
    }

export default ProfileStatusWithHooks;