import React from 'react';
import { useCart } from '../context/CartContext';

interface SneakerCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const SneakerCard: React.FC<SneakerCardProps> = ({ id, name, description, price, imageUrl }) => {
    const { addToCart } = useCart();

    const sneaker = { id, name, description, price, imageUrl };
    return (
        <div className="sneaker-card">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p className='sneaker-description'>{description}</p>
            <div className="sneaker-card-footer">
                <p className="sneaker-price">${price.toFixed(2)}</p>
                <button className="add-to-cart-button" onClick={() => addToCart(sneaker)}>BUY</button>
            </div>
        </div>
    );
};

export default SneakerCard;