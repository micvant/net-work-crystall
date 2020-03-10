const PAGE_DIALOGS = 'PAGE_DIALOGS';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';
const GET_DIALOGS = 'GET_DIALOGS';
const GET_MESSAGE = 'GET_MESSAGE';
const PUSH_MESSAGE = 'PUSH_MESSAGE';

const _updateMessageDialog = (state) => {
    let Messages = state;
    let countID = Messages.length + 1;
    let newMessage = {
        id: countID,
        message: state.textMessage,
    };
    Messages.push(newMessage);
};

export const reducerDialogs = (state, action) => {
    switch (action.type) {
        case UPDATE_TEXT_MESSAGE:
            return _updateMessageDialog(state);
        case GET_DIALOGS:
            return state;
        case GET_MESSAGE:
            return state.newMessage;
        case PUSH_MESSAGE:
            state.newMessage = action.message;
            break;
        default:
            return state;
    };
};

export const getPropsDialogs = () => ({
    type: GET_DIALOGS,
    page: PAGE_DIALOGS
});
export const getMessage = () => ({
    type: GET_MESSAGE,
    page: PAGE_DIALOGS
});
export const pushMessage = (body) => ({
    type: PUSH_MESSAGE,
    page: PAGE_DIALOGS,
    message: body
});
export const updateTextMessageActionCreate = () => ({
    type: UPDATE_TEXT_MESSAGE,
    page: PAGE_DIALOGS
});