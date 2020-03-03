import avatar1 from './../components/Profile/MyPosts/Post/PostImg/avatar1.jpg';
import avatar2 from './../components/Profile/MyPosts/Post/PostImg/avatar2.jpg';

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
      ]
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
    let countId = Posts.length + 1;
    let newPOst = {
      id: countId,
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

  dispatch(action) {
    switch (action.type){
      case 'ADD-POST': 
        this._addPost();
        break;
      case 'UPDATE-TEXT-POST':
        this._updateTextPost(action.newText);
        break;
      }
    }
};

export default store;