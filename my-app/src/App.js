import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Footer from './components/Footer';

// Компонента возвращает разметку!
const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
