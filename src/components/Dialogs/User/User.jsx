import React from "react";
import styles from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.avatar} {props.name}</NavLink>
        </div>
    )
}

export default User;