import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {props.PropsDialogs.DialogsElements}
            </div>
            <div className={s.message}>
                {props.PropsDialogs.MessagesElements}
            </div>
        </div>
    );
};

export default Dialogs;