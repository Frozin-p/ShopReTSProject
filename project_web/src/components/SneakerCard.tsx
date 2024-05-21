import React from 'react';

interface SneakerCardProps {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const SneakerCard: React.FC<SneakerCardProps> = ({ name, description, price, imageUrl }) => {
    return (
        <div className="sneaker-card">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p className='sneaker-price'>${price.toFixed(2)}</p>
        </div>
    );
};

export default SneakerCard;