import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s}>
            My posts
            <div>
                New post
            </div>
            <div>
                <Post message='Hello world!' like='5' avatar='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg' />
                <Post message='Hi!' like='3' avatar='https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg' />
            </div>
        </div>
    );
};

export default MyPosts;