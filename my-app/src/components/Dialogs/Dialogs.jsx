import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';

let DataReposit = [
    { id: 1, name: 'Anton' },
    { id: 2, name: 'Vlad' },
    { id: 3, name: 'Ilia' }];
// Преобразование одного массива элементов в другой
let DialogsElements = DataReposit.map(el=> <Dialog name={el.name} id={el.id}/>);

let DataMessage = [
    {message: 'Hello! How are you?'},
    {message: 'Hello! Iam fine !'},
    {message: 'Are you?'}
];

let MessagesElements = DataMessage.map(el=> <Messages message={el.message}/>);

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {/* <Dialog name={DataReposit[0].name} id={DataReposit[0].id} />
                <Dialog name={DataReposit[1].name} id={DataReposit[1].id} />
                <Dialog name={DataReposit[2].name} id={DataReposit[2].id} /> */}
                {DialogsElements}
            </div>
            <div className={s.message}>
                {/* <Messages message='Hello! How are you?' />
                <Messages message='Hello! Iam fine !' />
                <Messages message='Are you?' /> */}
                {MessagesElements}
            </div>
        </div>
    );
};

export default Dialogs;