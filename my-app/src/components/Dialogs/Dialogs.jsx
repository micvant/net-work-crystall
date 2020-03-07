import React from 'react';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Dialog from './Dialog/Dialog';
import {updateTextMessageActionCreate, getPropsDialogs, getMessage} from '../../Redax/Redax'

const Dialogs = (props) => { 
    debugger;
    let MessagesElements = props.dispatch(getPropsDialogs()).DataMessage.map(el=> <Messages message={el.message}/>);
    let DialogsElements = props.dispatch(getPropsDialogs()).DataFriends.map(el=> <Dialog name={el.name} id={el.id}/>);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let newMessage = newMessageElement.current.value;
        props.dispatch(updateTextMessageActionCreate(newMessage));
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {DialogsElements}
            </div>
            <div className={s.message}>
                {MessagesElements}
                <textarea ref={newMessageElement}>{props.dispatch(getMessage())}</textarea>
                <button onClick={addMessage.bind(props.store)}>Send message</button>
            </div>
        </div>
    );
};

export default Dialogs;