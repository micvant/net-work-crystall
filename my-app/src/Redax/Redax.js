import avatar1 from './../components/Profile/MyPosts/Post/PostImg/avatar1.jpg';
import avatar2 from './../components/Profile/MyPosts/Post/PostImg/avatar2.jpg';

const ADD_POST = 'ADD-POST';
const ADD_DIALOGS = 'ADD_DIALOGS';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';
const GET_TEXT_POST = 'GET_TEXT_POST';
const GET_POSTS = 'GET_POSTS';
const GET_DIALOGS = 'GET_DIALOGS';
const GET_MESSAGE = 'GET_MESSAGE';
const PUSH_MESSAGE = 'PUSH_MESSAGE';
const USER = 'USER';

let store = {

  _state: {
    PageDialogs: {
      DataFriends: [{
          id: 1,
          name: 'Anton',
          avatar: avatar1
        },
        {
          id: 2,
          name: 'Vlad',
          avatar: avatar2
        },
        {
          id: 3,
          name: 'Ilia',
          avatar: ''
        }
      ],
      DataMessage: [{
          message: 'Hello! How are you?'
        },
        {
          message: 'Hello! Iam fine !'
        },
        {
          message: 'Are you?'
        }
      ],
      newMessage: ''
    },

    PageProfile: {
      Posts: [{
          id: 1,
          message: 'Hello world!',
          like: 5,
          avatar: avatar1
        },
        {
          id: 2,
          message: 'Hi',
          like: 3,
          avatar: avatar2
        }
      ],
      newPostText: 'Hello!',
    }
  },

  _render() {},

  getState() {
    return this._state;
  },
  // Паттерн Observer
  subcribe(observer) {
    this._render = observer;
    this._render();
  },

  _addPost() {
    let Posts = this._state.PageProfile.Posts;
    let countID = Posts.length + 1;
    let newPOst = {
      id: countID,
      message: this._state.PageProfile.newPostText,
      avatar: '',
      like: 0
    };
    Posts.push(newPOst);
    this._state.PageProfile.newPostText = '';
    this._render();
  },

  _updateTextPost(newText) {
    this._state.PageProfile.newPostText = newText;
    this._render();
  },

  _updateMessageDialog(textMessage) {
    let Messages = this._state.PageDialogs.DataMessage;
    let countID = Messages.length + 1;
    let newMessage = {
      id: countID,
      message:  textMessage,
    };
    Messages.push(newMessage);
    this._render();
  },

  dispatch(action) {
    switch (action.type){
      case ADD_POST: 
        this._addPost();
        break;
      case UPDATE_TEXT_POST:
        this._updateTextPost(action.message);
        break;
      case UPDATE_TEXT_MESSAGE:
        this._updateMessageDialog(this._state.PageDialogs.newMessage);
        break;
      case GET_TEXT_POST:
        return this._state.PageProfile.newPostText;
      case GET_POSTS:
        return this._state.PageProfile.Posts;
      case GET_DIALOGS:
        return this._state.PageDialogs;
      case GET_MESSAGE:
        return this._state.PageDialogs.newMessage;
      case PUSH_MESSAGE:
        this._state.PageDialogs.newMessage = action.message;
        this._render();
      };
    }
};

export const addPostActionCreate = () => ({type: ADD_POST});
export const updateTextPostActionCreate = (text) => ({type: UPDATE_TEXT_POST, message: text});
export const updateTextMessageActionCreate = () => ({type: UPDATE_TEXT_MESSAGE});
export const createUser = () => ({type: USER, name: '', avatar: ''});
export const addTextPostActionCreate = () => ({type: GET_TEXT_POST});
export const createPosts = () => ({type: GET_POSTS});
export const getPropsDialogs = () => ({type: GET_DIALOGS});
export const getMessage = () => ({type: GET_MESSAGE});
export const pushMessage = (body) => ({type: PUSH_MESSAGE, message: body});

export default store;