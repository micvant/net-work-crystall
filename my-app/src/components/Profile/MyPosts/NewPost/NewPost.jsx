import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <form>
            <input
                className={s.sendMessageForm}
                onChange={props.handleChange}
                value={props.state}
                placeholder="Type your message and hit ENTER"
                type="text" />
        </form>
    )
};

export default NewPost;
