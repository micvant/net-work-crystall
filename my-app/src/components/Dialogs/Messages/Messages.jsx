import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div>
            <div>
                <p>
                    {props.message}
                </p>
            </div>
        </div>
    );
};

export default Messages;