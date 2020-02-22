import React from 'react';
import s from './NavBar.module.css';
// .module.css превращает css файл в объект
// {s.nav} позволяет получить данные из класа css

const NavBar = () => {
    return (
        <nav className={s.nav}>
          <div className={s.item}>
            <a>Profile</a>
          </div>
          <div className={s.item}>
            <a>Messages</a>
          </div>
          <div className={s.item}>
            <a>News</a>
          </div>
          <div className={s.item}>
            <a>Music</a>
          </div>
          <div className={s.item}>
            <a>Setings</a>
          </div>
        </nav>
    );
};

export default NavBar;