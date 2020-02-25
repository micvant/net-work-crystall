import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

import Dialog from './components/Dialogs/Dialog/Dialog';
import Messages from './components/Dialogs/Messages/Messages';

import avatar1 from './components/Profile/MyPosts/Post/PostImg/avatar1.jpg';
import avatar2 from './components/Profile/MyPosts/Post/PostImg/avatar2.jpg';
import Post from './components/Profile/MyPosts/Post/Post';

let DataReposit = [
  { id: 1, name: 'Anton' },
  { id: 2, name: 'Vlad' },
  { id: 3, name: 'Ilia' }
];

let DataMessage = [
    {message: 'Hello! How are you?'},
    {message: 'Hello! Iam fine !'},
    {message: 'Are you?'}
];

let DataPost = [
  {message: 'Hello world!', like: 5, avatar: avatar1},
  {message: 'Hi', like: 3, avatar: avatar2}
];

// Аналогичный пример 
// let PostsElements = DataPost.map((el) => { 
//    return (
//    <Post message={el.message} like={el.like} avatar={el.avatar} />
//    )
// });

// Преобразование одного массива элементов в другой
let PostsElements = DataPost.map(el => <Post message={el.message} like={el.like} avatar={el.avatar} />)
let DialogsElements = DataReposit.map(el=> <Dialog name={el.name} id={el.id}/>);
let MessagesElements = DataMessage.map(el=> <Messages message={el.message}/>);

let PropsDialogs = {
  DialogsElements,
  MessagesElements
};

// Компонента возвращает разметку!
const App = () => {
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/Profile' render={() => <Profile PostsElements={PostsElements}/>} />  
          <Route path='/Dialogs' render={() => <Dialogs PropsDialogs={PropsDialogs}/>} /> 
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
