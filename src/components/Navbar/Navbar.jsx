import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// let classes = {
//     'nav': 'Navbar_nav__1WUpx',
//     'item': 'Navbar_item__GKRGb'
//      'active':  'blablabla active'
// }


// 'item active';
// let c1 = 'item';
// let c2 = 'active';
// let classes = c1 + ' ' + c2;
// let classesNew = `${s.item} ${s.active}`;




const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;
