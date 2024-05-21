import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Frozin`s</h1>
            </div>
            <div className="navbar-right">
                <button>Авторизация</button>
                <button>Корзина</button>
            </div>
        </nav>
    );
};

export default Navbar;
