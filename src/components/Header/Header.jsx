import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Registration from "../Registration/Registration";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://prestonvill.ru/common/uploads/images/Post/barbara-palvin-yarkij-natural-soft-drama-victoria-s-secret-barbara-palvin-tipazh-kibbi-top-model-podium-stil-yarkogo-naturala-obrazy%2041.jpg" height={100}/>
            <div className={styles.div}>Barbara's Sayt</div>
            <div className={styles.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>LOGIN</NavLink> }
            </div>
            <NavLink to={'/registration'}>REGISTRATION</NavLink> }
        </header>
    )
};

export default Header;