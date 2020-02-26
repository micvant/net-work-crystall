import React from 'react';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Dialog from './Dialog/Dialog';


const Dialogs = (props) => {
        
    let MessagesElements = props.PropsDialogs.DataMessage.map(el=> <Messages message={el.message}/>);
    let DialogsElements = props.PropsDialogs.DataReposit.map(el=> <Dialog name={el.name} id={el.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {DialogsElements}
            </div>
            <div className={s.message}>
                {MessagesElements}
            </div>
        </div>
    );
};

export default Dialogs;