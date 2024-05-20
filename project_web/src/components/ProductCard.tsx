import React from 'react';
import { Product } from '../types/Product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
