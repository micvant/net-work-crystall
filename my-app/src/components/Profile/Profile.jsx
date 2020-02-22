import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg" alt=""></img>
          </div>
          <div>
            ava + descriptions
          </div>
          <MyPosts/>
        </div> 
    );
};

export default Profile;