import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div className={s}>
            My posts
            <div>
                New post
            </div>
            <div>
                {props.PostsElements}
            </div>
        </div>
    );
};

export default MyPosts;