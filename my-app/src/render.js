import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './Redax/Redax';

export let Render = (State) => {
        ReactDOM.render(<App 
        state={State}
        ReactDOM={ReactDOM}
        Render={Render}
        addPost={addPost}/>,
        document.getElementById('root'));
};


