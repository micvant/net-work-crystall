import avatar1 from './../components/Profile/MyPosts/Post/PostImg/avatar1.jpg';
import avatar2 from './../components/Profile/MyPosts/Post/PostImg/avatar2.jpg';
import {
  reducerDialogs
} from './reducerDialogs';
import {
  ProfileReducer
} from './reducerProfile';

const PAGE_DIALOGS = 'PAGE_DIALOGS';
const PAGE_PROFILE = 'PAGE_PROFILE';

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

  // Паттерн Observer
  subcribe(observer) {
    this._render = observer;
    this._render();
  },

  dispatch(action) {
    let state;
    switch (action.page) {
      case PAGE_DIALOGS:
        state = reducerDialogs(this._state.PageDialogs, action);
        // this._render();
        return state;
      case PAGE_PROFILE:
        state = ProfileReducer(this._state.PageProfile, action);
        // this._render();s
        return state;
      default:
        return this._state;
    }
  }
};

export default store;