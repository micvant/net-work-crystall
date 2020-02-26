import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let Elements = props.PostsElements.map(el => <Post message={el.message} like={el.like} avatar={el.avatar} />)

    return (
        <div className={s}>
            My posts
            <div>
                New post
            </div>
            <div>
                {Elements}
            </div>
        </div>
    );
};

export default MyPosts;