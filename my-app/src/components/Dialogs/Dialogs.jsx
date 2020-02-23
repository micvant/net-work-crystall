import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <Dialog name='Anton' />
                <Dialog name='Dima' />
            </div>
            <div className={s.message}>
                <Messages message='Hello! How are you?' />
            </div>
        </div>
    );
};

export default Dialogs;