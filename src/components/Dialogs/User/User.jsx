import React from "react";
import s from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props._id}>{props.avatar} {props.name}</NavLink>
        </div>
    )
}

export default User;