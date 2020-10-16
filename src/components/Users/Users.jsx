import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Users.module.css';
import axios from 'axios';
import { usersAPI } from "../../api/api";
import Paginator from "../Common/Paginator/Paginator";

let Users = (props) => {

    return (
            <div className={styles.container}>

                <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                           totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />

                {
                    props.users.map(user => <div key={user.id}>
                        <div className={styles.container}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photoUrl != " " ? user.photoUrl : "https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png"}
                                className={styles.userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === user.id)}
                                     onClick={() => {props.unfollow(user.id) }}>unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === user.id)}

                                    onClick={() => {props.follow(user.id) }}>follow</button>}
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{user.fullName}</div>
                        </span>
                        <span>
                            <div>{user.id}</div>
                        </span>
                    </span>
                        </div>
                    </div>)
                }
            </div>
        )
    }

export default Users