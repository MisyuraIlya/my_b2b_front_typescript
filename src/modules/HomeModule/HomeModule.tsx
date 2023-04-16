import React from 'react';
import Hero from './components/Hero/Hero';
import HeroSlider from './components/HeroSlider/HeroSlider';
import SliderCategory from './components/SliderCategory/SliderCategory';
import SliderProduct from './components/SliderProduct/SliderProduct';
import { Container } from './constructor';
import { IProduct } from './constructor';
import { ICategory } from './constructor';
// const mockDataProduct: IProduct[] = [
//     {
//       id: 1,
//       category: {id:1, name:'1',image:'1', createdAt: new Date(), updatedAt: new Date()},
//       priceListBase: {id:1, price:10, discount:0, createdAt: new Date(), updatedAt: new Date()},
//       sku: 'SKU001',
//       name: 'Product 1',
//       image: 'https://havaya-b2b.co.il/src/img/products/49666.jpg',
//       description: 'Description of product 1',
//       packQuant: 10,
//       barcode: '1',
//       unpublished: true,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//         id: 2,
//         category: {id:1, name:'1',image:'1', createdAt: new Date(), updatedAt: new Date()},
//         priceListBase: {id:1, price:10, discount:0, createdAt: new Date(), updatedAt: new Date()},
//         sku: 'SKU001',
//         name: 'Product 1',
//         image: 'https://havaya-b2b.co.il/src/img/products/49666.jpg',
//         description: 'Description of product 1',
//         packQuant: 10,
//         barcode: '1',
//         unpublished: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     },
//     {
//         id: 3,
//         category: {id:1, name:'1',image:'1', createdAt: new Date(), updatedAt: new Date()},
//         priceListBase: {id:1, price:10, discount:0, createdAt: new Date(), updatedAt: new Date()},
//         sku: 'SKU001',
//         name: 'Product 1',
//         image: 'https://havaya-b2b.co.il/src/img/products/49666.jpg',
//         description: 'Description of product 1',
//         packQuant: 10,
//         barcode: '1',
//         unpublished: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     },
//   ];

// const mockDataCategory: ICategory[] = [
//     {id:1,  name:'a',image:'https://havaya-b2b.co.il/src/img/categories/6191621.jpg',  createdAt:new Date(), updatedAt:new Date()},
//     {id:2,  name:'b',image:'https://havaya-b2b.co.il/src/img/categories/4191601.jpg',  createdAt:new Date(), updatedAt:new Date()},
//     {id:3,  name:'c',image:'https://havaya-b2b.co.il/src/img/categories/3145559.jpg',  createdAt:new Date(), updatedAt:new Date()},
//     {id:4,  name:'d',image:'https://havaya-b2b.co.il/src/img/categories/2191510.jpg',  createdAt:new Date(), updatedAt:new Date()},

// ]
const HomeModule = () => {
    return (
        <div className='HomeModule'>
            <Hero/>
            <HeroSlider/>
            <Container>
                <SliderCategory slides={4} data={[]}/>
                <SliderProduct slides={3} data={[]}/>
            </Container>
        </div>
    );
};

export default HomeModule;