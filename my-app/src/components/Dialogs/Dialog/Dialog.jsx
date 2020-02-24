import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {

    let path = '/Dialogs/'+ props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;