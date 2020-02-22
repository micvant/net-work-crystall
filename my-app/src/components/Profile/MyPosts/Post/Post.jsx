import React from 'react';
import s from './Post.module.css';
import img from './PostImg/like.png'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.icon} src={props.avatar} alt="icon"/>
            <p>{props.message}</p>
            <span className={s.like}>{props.like}</span>
            <img className={s.likeImg} src={img} alt="like"/>
        </div>
    );
};

export default Post;