import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';


const MyPosts = (props) => {

    let Elements = props.PostsElements.map(el => <Post message={el.message} like={el.like} avatar={el.avatar} />)

    let newPostElement = React.createRef();
    
    let addText = () => {
        let Text = newPostElement.current.value;
        let action = {
            type: 'UPDATE-TEXT-POST',
            newText: Text
        }
        props.dispatch(action);
    };
    let addPost = () => {
        let action = {
            type: 'ADD-POST'
        };  
        props.dispatch(action);
    };

    return (
        <div className={s}>
            My posts
            <div>
                <NewPost
                    refInput={newPostElement}
                    addText={addText}
                    newPostText={props.newPostText} />
                <button onClick={addPost}>New post</button>
            </div>
            <div>
                {Elements}
            </div>
        </div>
    );
};

export default MyPosts;