import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/" activeClassName={styles.active}>Home</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/user" activeClassName={styles.active}>User</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/dialogs" activeClassName={styles.active}>Dialogs</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/friends" activeClassName={styles.active}>Friends</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;
