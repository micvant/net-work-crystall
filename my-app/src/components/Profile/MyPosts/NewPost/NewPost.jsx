import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {

    return (
        <form>
            <input
                className={s.sendMessageForm}
                onChange={props.addText}
                ref={props.refInput}
                value={props.newPostText}
                placeholder="Type your message and hit ENTER"
                type="text" />
        </form>
    )
};

export default NewPost;
