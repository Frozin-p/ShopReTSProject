import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Frozin`s</a>
        <ul className="navbar-menu">
          <li><a href="#" className="navbar-item">Главная</a></li>
          <li><a href="#" className="navbar-item">Авторизация</a></li>
          <li><a href="#" className="navbar-item">Контакты</a></li>
          <li><a href="#" className="navbar-item">Личный кабинет</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;