import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div>
            <p>
                {props.message}
            </p>
        </div>
    );
};

export default Messages;