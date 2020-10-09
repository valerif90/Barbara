import React from 'react';
import styles from './App.module.css';
import {Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from "./components/Login/Login";
import {authAPI} from "./api/api";
import Home from './components/Home/Home';



class App extends React.Component {


    componentDidMount () {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {_id, login, email} = response.data.data;
                    this.props.setAuthUserData(_id, email, login);
                }
            })
        // this.props.getAuthUserData();
    }


    render() {

    return (
            <div>
                <img className={styles.wallpaper} src='https://i.pinimg.com/originals/7b/13/7a/7b137a04428d38f110e32aa2cebd4791.jpg'/>
                 <div className={styles.container}>
                <HeaderContainer />
                <section>
                    <Navbar/>
                    <div className='container_content'>
                        <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
                        <Route exact path='/dialogs' render={ () => <DialogsContainer /> }/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/friends' component={Friends}/>
                        <Route path='/users' render={ () => <UsersContainer /> }/>
                        <Route path='/login' render={ () => <Login /> }/>
                        <Route exact path='/' render={ () => <Home /> }/>
                    </div>
                </section>
                </div>
            </div>
        )
    }
};

export default App;
