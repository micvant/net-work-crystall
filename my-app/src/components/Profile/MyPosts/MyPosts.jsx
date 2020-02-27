import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost'

const MyPosts = (props) => {
    let Elements = props.PostsElements.map(el => <Post message={el.message} like={el.like} avatar={el.avatar} />)
    let addPost = () => {
        alert('hi')
    };
    return (
        <div className={s}>
            My posts
            <div>
                <NewPost />
                <button onClick={addPost}>New post</button>
            </div>
            <div>
                {Elements} 
            </div>
        </div>
    );
};

export default MyPosts;