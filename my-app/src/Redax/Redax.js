import avatar1 from './../components/Profile/MyPosts/Post/PostImg/avatar1.jpg';
import avatar2 from './../components/Profile/MyPosts/Post/PostImg/avatar2.jpg';
import { Render } from '../render';

let State = {};

State.BranchDialogs = {
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

State.BranchMyPosts = {
   Posts: [
    {id: 1, message: 'Hello world!', like: 5, avatar: avatar1},
    {id: 2, message: 'Hi', like: 3, avatar: avatar2}
  ]
};

export let addPost = (newMessage) => {
  let Posts = State.BranchMyPosts.Posts; 
  let countId = Posts.length + 1;
  let newPOst = {id: countId, message: newMessage, avatar: '', like: 0};
  Posts.push(newPOst);
  Render(State);    
};

export default State;