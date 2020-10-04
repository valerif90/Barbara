import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import sidebarReducer from './sidebar_reducer';
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;