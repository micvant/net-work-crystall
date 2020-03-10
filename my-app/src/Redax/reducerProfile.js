const PAGE_PROFILE = 'PAGE_PROFILE';
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const GET_TEXT_POST = 'GET_TEXT_POST';
const GET_POSTS = 'GET_POSTS';

const _addPost = (state) => {
    let Posts = state.Posts;
    let countID = Posts.length + 1;
    let newPOst = {
        id: countID,
        message: state.newPostText,
        avatar: '',
        like: 0
    };
    Posts.push(newPOst);
    state.newPostText = '';
};

const _updateTextPost = (state, newText) => {
    state.newPostText = newText;
}

export const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return _addPost(state);
            break;
        case UPDATE_TEXT_POST:
            return _updateTextPost(state, action.message);
            break;
        case GET_TEXT_POST:
            return state.newPostText;
        case GET_POSTS:
            return state.Posts;
        default:
            return state;
    }
}

export const addPostActionCreate = () => ({
    type: ADD_POST,
    page: PAGE_PROFILE
});
export const updateTextPostActionCreate = (text) => ({
    type: UPDATE_TEXT_POST,
    page: PAGE_PROFILE,
    message: text
});
export const addTextPostActionCreate = () => ({
    type: GET_TEXT_POST,
    page: PAGE_PROFILE
});
export const createPosts = () => ({
    type: GET_POSTS,
    page: PAGE_PROFILE
});