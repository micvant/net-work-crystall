import avatar1 from './../components/Profile/MyPosts/Post/PostImg/avatar1.jpg';
import avatar2 from './../components/Profile/MyPosts/Post/PostImg/avatar2.jpg';

let DataReposit = [
    { id: 1, name: 'Anton' },
    { id: 2, name: 'Vlad' },
    { id: 3, name: 'Ilia' }
  ];
  
  let DataMessage = [
      {message: 'Hello! How are you?'},
      {message: 'Hello! Iam fine !'},
      {message: 'Are you?'}
  ];
  
  let DataPost = [
    {message: 'Hello world!', like: 5, avatar: avatar1},
    {message: 'Hi', like: 3, avatar: avatar2}
  ];
  
  let PropsDialogs = {
     BranchDialogs: {
      DataReposit,
      DataMessage
    },
    DataPost
  };

  export default PropsDialogs;