import * as serviceWorker from './serviceWorker';
import store from './Redax/Redax';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export let Render = () => {
    ReactDOM.render(<BrowserRouter >
    <App 
    state={store.getState()}
    Render={Render}
    dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root'));
};

store.subcribe(Render);

serviceWorker.unregister();
