import React from 'react'
import classes from '../css/NavBar.module.css';
// .module.css превращает css файл в объект
// {classes.nav} позволяет получить данные из класа css

const NavBar = () => {
    return (
        <nav className={classes.nav}>
          <div className={classes.item}>
            <a>Profile</a>
          </div>
          <div className={classes.item}>
            <a>Messages</a>
          </div>
          <div className={classes.item}>
            <a>News</a>
          </div>
          <div className={classes.item}>
            <a>Music</a>
          </div>
          <div className={classes.item}>
            <a>Setings</a>
          </div>
        </nav>
    );
};

export default NavBar;