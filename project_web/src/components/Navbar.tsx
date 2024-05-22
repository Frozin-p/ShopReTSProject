import React from 'react';

interface NavbarProps {
    onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Frozin`s</h1>
            </div>
            <div className="navbar-right">
                <button>Авторизация</button>
                <button onClick={onCartClick}>Корзина</button>
            </div>
        </nav>
    );
};

export default Navbar;
