import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

interface CartProps {
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
    const { cartItems, removeFromCart } = useCart();

    const handleClickOutside = (event: MouseEvent) => {
        const cartElement = document.getElementById('cart');
        if (cartElement && !cartElement.contains(event.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="cart-overlay">
            <div className="cart" id="cart">
                <button className="close-button" onClick={onClose}>х</button>
                <h2>Корзина</h2>
                {cartItems.length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                    <button className='remove-from-cart' onClick={() => removeFromCart(item.id)}>Удалить</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Cart;
