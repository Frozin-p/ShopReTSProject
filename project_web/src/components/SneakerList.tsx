import React, { useEffect, useState } from 'react';
import SneakerCard from './SneakerCard';

interface Sneaker {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const SneakerList: React.FC = () => {
    const [sneakers, setSneakers] = useState<Sneaker[]>([]);

    useEffect(() => {
        const fetchSneakers = async () => {
            const response = await fetch('https://localhost:7245/api/sneakers');
            const data = await response.json();
            setSneakers(data);
        };

        fetchSneakers();
    }, []);

    return (
        <div className="sneaker-list">
            {sneakers.map((sneaker) => (
                <SneakerCard key={sneaker.id} {...sneaker} />
            ))}
        </div>
    );
};

export default SneakerList;