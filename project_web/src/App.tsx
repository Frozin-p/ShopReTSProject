import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SneakerList from './components/SneakerList';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import AuthModal from './components/Auth';



const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
  };

  const toggleAuth = () => {
      setIsAuthOpen(!isAuthOpen);
  };

  return (
    <CartProvider>
      <div className="App">
        <Navbar onCartClick={toggleCart} onAuthClick={toggleAuth} />
          <main>
            <h2>Air Jordans</h2>
              <SneakerList />
          </main>
          {isCartOpen && <Cart onClose={toggleCart} />}
          {isAuthOpen && <AuthModal onClose={toggleAuth} />}
      </div>
    </CartProvider>
  );
};

export default App;