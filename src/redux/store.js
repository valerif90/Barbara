import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi', likesCount: '15'},
                {id: '2', message: 'Hello', likesCount: '20'},
                {id: '3', message: 'Yo', likesCount: '20'},
                {id: '4', message: 'Moove', likesCount: '20'}
            ],
            newPostText: 'Nastya1'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: '1',
                    name: 'Nastya',
                    avatar: ''
                },
                {id: '2', name: 'Vika', avatar: 1},
                {id: '3', name: 'Sveta', avatar: 2}
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Hello'},
                {id: '3', message: 'How are you'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('aaaaaaaa');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    }
};


export default store;
window.store = store;