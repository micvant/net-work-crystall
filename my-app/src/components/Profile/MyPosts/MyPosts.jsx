import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import {updateTextPostActionCreate, addPostActionCreate, addTextPostActionCreate, createPosts} from '../../../Redax/Redax'

const MyPosts = (props) => {
    
    let Elements = props.dispatch(createPosts()).map(el => <Post message={el.message} like={el.like} avatar={el.avatar} />)
    let newPostElement = React.createRef();
    
    let addText = () => {
        let Text = newPostElement.current.value;
        props.dispatch(updateTextPostActionCreate(Text));
    };
    let addPost = () => {
        props.dispatch(addPostActionCreate());
    };

    return (
        <div className={s}>
            My posts
            <div>
                <NewPost
                    refInput={newPostElement}
                    addText={addText}
                    newPostText={props.dispatch(addTextPostActionCreate())} />
                <button onClick={addPost}>New post</button>
            </div>
            <div>
                {Elements}
            </div>
        </div>
    );
};

export default MyPosts;