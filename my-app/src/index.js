import * as serviceWorker from './serviceWorker';
import State from './Redax/Redax';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateTextPost, Subcribe} from './Redax/Redax';

export let Render = () => {
    ReactDOM.render(<App 
    state={State}
    Render={Render}
    addPost={addPost}
    updateTextPost={updateTextPost}/>,
    document.getElementById('root'));
};

Render(Render);


serviceWorker.unregister();
