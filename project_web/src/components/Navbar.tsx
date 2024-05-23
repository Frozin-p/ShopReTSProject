import React from 'react';

interface NavbarProps {
    onCartClick: () => void;
    onAuthClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, onAuthClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Frozin`s</h1>
            </div>
            <div className="navbar-right">
                <button onClick={onAuthClick}>Вход</button>
                <button onClick={onCartClick}>Корзина</button>
            </div>
        </nav>
    );
};

export default Navbar;
