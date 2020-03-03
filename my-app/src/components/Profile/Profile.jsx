import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      PostsElements={props.PostsElements.Posts} 
      Render={props.Render}
      dispatch={props.dispatch}
      newPostText={props.newPostText}/>
    </div>
  );
};

export default Profile;