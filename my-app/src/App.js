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

// Компонента возвращает разметку!
const App = (props) => { 
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/Profile' render={() => <Profile PostsElements={props.state.BranchMyPosts} addPost={props.addPost}/>} />  
          <Route path='/Dialogs' render={() => <Dialogs PropsDialogs={props.state.BranchDialogs}/>} /> 
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
