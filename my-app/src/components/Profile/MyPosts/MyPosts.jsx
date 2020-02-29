import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';


const MyPosts = (props) => {
    let Elements = props.PostsElements.map(el => <Post message={el.message} like={el.like} avatar={el.avatar} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };
    return (
        <div className={s}>
            My posts
            <div>
                <NewPost refInput={newPostElement} />
                <button onClick={addPost}>New post</button>
            </div>
            <div>
                {Elements}
            </div>
        </div>
    );
};

export default MyPosts;