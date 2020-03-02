import avatar1 from './../components/Profile/MyPosts/Post/PostImg/avatar1.jpg';
import avatar2 from './../components/Profile/MyPosts/Post/PostImg/avatar2.jpg';

let Render = () => {};

let State = {};

State.PageDialogs = {
   DataFriends: [
    { id: 1, name: 'Anton', avatar: avatar1},
    { id: 2, name: 'Vlad', avatar: avatar2},
    { id: 3, name: 'Ilia', avatar: '' }
  ],
   DataMessage: [
    {message: 'Hello! How are you?'},
    {message: 'Hello! Iam fine !'},
    {message: 'Are you?'}
]
};

State.PageProfile = {
   Posts: [
    {id: 1, message: 'Hello world!', like: 5, avatar: avatar1},
    {id: 2, message: 'Hi', like: 3, avatar: avatar2}
  ],
  newPostText: 'Hello!',
};

export const addPost = () => {
  let Posts = State.PageProfile.Posts; 
  let countId = Posts.length + 1;
  let newPOst = {id: countId, message: State.PageProfile.newPostText, avatar: '', like: 0};
  Posts.push(newPOst);
  State.PageProfile.newPostText = '';
  Render();    
};

export const updateTextPost = (newText) => {
  State.PageProfile.newPostText = newText; 
  Render();    
};

// Паттерн Observer
export const Subcribe = (observer)=> {
  Render = observer;
  Render();
};

export default State;