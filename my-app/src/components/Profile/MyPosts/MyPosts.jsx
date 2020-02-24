import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import avatar1 from './Post/PostImg/avatar1.jpg';
import avatar2 from './Post/PostImg/avatar2.jpg';

let DataPost = [
    {message: 'Hello world!', like: 5, avatar: avatar1},
    {message: 'Hi', like: 3, avatar: avatar2}
];

// Аналогичный пример 
// let PostsElements = DataPost.map((el) => { 
//    return (
//    <Post message={el.message} like={el.like} avatar={el.avatar} />
//    )
// });

let PostsElements = DataPost.map(el => <Post message={el.message} like={el.like} avatar={el.avatar} />)

const MyPosts = () => {
    return (
        <div className={s}>
            My posts
            <div>
                New post
            </div>
            <div>
                {/* <Post message='Hello world!' like='5' avatar={avatar1} />
                <Post message='Hi!'          like='3' avatar={avatar2} /> */}
                {PostsElements}
            </div>
        </div>
    );
};

export default MyPosts;