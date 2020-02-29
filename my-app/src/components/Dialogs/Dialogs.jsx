import React from 'react';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Dialog from './Dialog/Dialog';


const Dialogs = (props) => {   
    let MessagesElements = props.PropsDialogs.DataMessage.map(el=> <Messages message={el.message}/>);
    let DialogsElements = props.PropsDialogs.DataFriends.map(el=> <Dialog name={el.name} id={el.id}/>);
    
    let newMessageElement = React.createRef();
    
    let addMessage = () => {
        let textMessage = newMessageElement.current.value;
        alert(textMessage);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {DialogsElements}
            </div>
            <div className={s.message}>
                {MessagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    );
};

export default Dialogs;