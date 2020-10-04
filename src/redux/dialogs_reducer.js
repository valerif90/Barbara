const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    };
};


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;