import React from 'react';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Dialog from './Dialog/Dialog';
import {updateTextMessageActionCreate, getPropsDialogs, getMessage, pushMessage} from '../../Redax/reducerDialogs'

const Dialogs = (props) => { 
    let propsDialogs = props.dispatch(getPropsDialogs());
    let MessagesElements = propsDialogs.DataMessage.map(el=> <Messages message={el.message}/>);
    let DialogsElements = propsDialogs.DataFriends.map(el=> <Dialog name={el.name} id={el.id}/>);

    let addMessage = (e) => {
        props.dispatch(updateTextMessageActionCreate());
    };
    let updateMessage = (e) => {
        let body = e.target.value;
        props.dispatch(pushMessage(body));
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {DialogsElements}
            </div>
            <div className={s.message}>
                {MessagesElements}
                <textarea 
                    onChange={updateMessage}
                    value={props.dispatch(getMessage())}>     
                </textarea>
                <button onClick={addMessage}>
                    Send message
                </button>
            </div>
        </div>
    );
};

export default Dialogs;