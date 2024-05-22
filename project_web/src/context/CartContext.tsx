import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Sneaker {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface CartContextType {
    cartItems: Sneaker[];
    addToCart: (sneaker: Sneaker) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Sneaker[]>([]);

    const addToCart = (sneaker: Sneaker) => {
        setCartItems([...cartItems, sneaker]);
    };

    const removeFromCart = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};