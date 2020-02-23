import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    );
};

export default Dialog;