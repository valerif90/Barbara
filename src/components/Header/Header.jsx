import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://prestonvill.ru/common/uploads/images/Post/barbara-palvin-yarkij-natural-soft-drama-victoria-s-secret-barbara-palvin-tipazh-kibbi-top-model-podium-stil-yarkogo-naturala-obrazy%2041.jpg" height={100}/>
            <div className={s.div}>Barbara's Sait</div>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>LOGIN</NavLink> }
            </div>
        </header>
    )
};

export default Header;