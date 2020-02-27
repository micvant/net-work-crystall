import React from 'react';
import s from './ProfileInfo.module.css';
import HeaderImg from './../../../img/background_user.jpg'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={HeaderImg} alt="Header img"></img>
      </div>
      <div>
        ava + descriptions
      </div>
    </div>
  );
};

export default ProfileInfo;