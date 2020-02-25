import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
// .module.css превращает css файл в объект
// {s.nav} позволяет получить данные из класа css

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Dialogs' activeClassName={s.active}>Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/News' activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;