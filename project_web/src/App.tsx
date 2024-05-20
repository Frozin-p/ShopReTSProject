import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { Product } from './types/Product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



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
        name: 'Air Jordan 5 «Olive»',
        price: 210,
        description: 'Air Jordan 5 «Olive», которые изначально вышли в 2006 году, впервые вернутся весной 2024 года. Эта пара была частью коллекции Jordan Brand Lifestyle (LS) и вышла вместе с соответствующей одеждой. Эту расцветку многие считают одной из лучшей в линейке AJ5 за все время.',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/baaa5611-b560-4e94-a4e2-61b698c68432/air-jordan-5-retro-big-kids-shoes-Q7w8vv.png',
      },
      {
        id: 4,
        name: 'J Balvin x Air Jordan 3 «Rio»',
        price: 250,
        description: 'Кроссовки будут представлены в контрастной комбинации цветов Black, Solar Flare и Total Crimson Abyss. Пора получит черную основу с градиентными деталями на заднике и мидсоли, а также классическими серыми элефант-вставками спереди и сзади.',
        imageUrl: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/0c411364-8e10-4bf7-ae0f-f99c300000dc/air-jordan-3-x-j-balvin-rio-fn0344-001-%E2%80%94-releasedatum.jpg',
      },
      {
        id: 5,
        name: 'Air Jordan 11 «Space Jam»',
        price: 200,
        description: 'Основа сникеров состоит из гладкой черной сетки, дополненной соответствующими черными брызговиками из лакированной кожи. В центре внимания – синие акценты Varsity Royal, заменяющие оригинальные фиолетовые детали Concord Purple, которые были в первом выпуске. Контрастная белая мидсоль на «ледяной» полупрозрачной аутсоли завершает дизайн модели.',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c282fc56-171b-464b-9387-b39b19efe203/air-jordan-11-retro-low-black-varsity-royal-mens-shoes-MNm675.png',
      },
      {
        id: 6,
        name: 'Air Jordan 12 Retro "Taxi Flip"',
        price: 200,
        description: 'Верх обуви выполнен из мятой белой кожи с прошитыми линиями и ярким черным брызговиком с текстурой ящерицы. Яркий красный логотип Jumpman, элегантно вышитый на язычке, сочетается с накладкой из ТПУ в средней части стопы.',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fd7da2d3-50b4-4263-8450-ce88301a915f/air-jordan-12-retro-taxi-flip-mens-shoes-mmrpJt.png',
      },
    ];

    setProducts(mockProducts);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1></h1>      
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default App;