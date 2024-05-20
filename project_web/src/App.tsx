import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { Product } from './types/Product';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Air Jordan 1 High OG «University Blue»',
        price: 170,
        description: 'Кроссовки оформлены в белый White, синий University Blue и черный Black цвета. Эти высокие Air Jordan 1 будут иметь верх из белой кожи с небесно-голубыми вставками в сочетании с черной отделкой, шнурками, брендингом и “свушем”. Белая межподошва на яркой синей резиновой подошве будет завершать дизайн.',
        imageUrl: 'https://mpox.ru/image/cache/catalog/Foto%20Tovara/Jordan%201%20M/1203221935/Air-Jordan-1-High-University-Blue-3-2-1000x1000.jpg',
      },
      {
        id: 2,
        name: 'Nike SB x Air Jordan 4 «Black Cat»',
        price: 250,
        description: 'Nike SB x Air Jordan 4 «Black Cat» будут практически полностью оформлены в черный цвет и сделаны из замши. Эта пара Jordan 4 будет отличаться от ретро-версии специальной переработанной системой амортизации, подходящей для скейтбординга. Также мы увидим комбинированный брендинг и специальную упаковку.',
        imageUrl: 'https://mpox.ru/image/cache/catalog/Foto%20Tovara/NIke%20Jordan%204/0704221637/nike-air-Jordan-4-retro-black-cat-2020-CU1110_010-scaled-1000x1000.jpg',
      },
      {
        id: 3,
        name: 'Air Jordan 5',
        price: 210,
        description: 'Air Jordan 5 «Olive», которые изначально вышли в 2006 году, впервые вернутся весной 2024 года. Эта пара была частью коллекции Jordan Brand Lifestyle (LS) и вышла вместе с соответствующей одеждой. Эту расцветку многие считают одной из лучшей в линейке AJ5 за все время.',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/baaa5611-b560-4e94-a4e2-61b698c68432/air-jordan-5-retro-big-kids-shoes-Q7w8vv.png',
      },
    ];

    setProducts(mockProducts);
  }, []);

  return (
    <div className="App">
      <h1>Frozin`s</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;