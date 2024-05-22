import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SneakerList from './components/SneakerList';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';



const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

  return (
    <CartProvider>
      <div className="App">
          <Navbar onCartClick={toggleCart} />
          <main>
            <h2>Air Jordans</h2>
              <SneakerList />
          </main>
          {isCartOpen && <Cart onClose={toggleCart} />}
      </div>
    </CartProvider>
  );
};

export default App;