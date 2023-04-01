import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IProduct } from '../../constructor';
import SliderProduct from './SliderProduct';
import './SliderProduct.styles.scss';

export default {
    title: 'Components/HomeModule/SliderProduct',
    component: SliderProduct
} as ComponentMeta<typeof SliderProduct>;

const mockDataProduct: IProduct[] = [
    {
      id: 1,
      category: {id:1, name:'1',image:'1', createdAt: new Date(), updatedAt: new Date()},
      priceListBase: {id:1, price:10, discount:0, createdAt: new Date(), updatedAt: new Date()},
      sku: 'SKU001',
      name: 'Product 1',
      image: 'https://havaya-b2b.co.il/src/img/products/49666.jpg',
      description: 'Description of product 1',
      packQuant: 10,
      barcode: '1',
      unpublished: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
        id: 2,
        category: {id:1, name:'1',image:'1', createdAt: new Date(), updatedAt: new Date()},
        priceListBase: {id:1, price:10, discount:0, createdAt: new Date(), updatedAt: new Date()},
        sku: 'SKU001',
        name: 'Product 1',
        image: 'https://havaya-b2b.co.il/src/img/products/49666.jpg',
        description: 'Description of product 1',
        packQuant: 10,
        barcode: '1',
        unpublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        category: {id:1, name:'1',image:'1', createdAt: new Date(), updatedAt: new Date()},
        priceListBase: {id:1, price:10, discount:0, createdAt: new Date(), updatedAt: new Date()},
        sku: 'SKU001',
        name: 'Product 1',
        image: 'https://havaya-b2b.co.il/src/img/products/49666.jpg',
        description: 'Description of product 1',
        packQuant: 10,
        barcode: '1',
        unpublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      id: 4,
      category: {id:1, name:'1',image:'1', createdAt: new Date(), updatedAt: new Date()},
      priceListBase: {id:1, price:10, discount:0, createdAt: new Date(), updatedAt: new Date()},
      sku: 'SKU001',
      name: 'Product 1',
      image: 'https://havaya-b2b.co.il/src/img/products/49666.jpg',
      description: 'Description of product 1',
      packQuant: 10,
      barcode: '1',
      unpublished: true,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    id: 5,
    category: {id:1, name:'1',image:'1', createdAt: new Date(), updatedAt: new Date()},
    priceListBase: {id:1, price:10, discount:0, createdAt: new Date(), updatedAt: new Date()},
    sku: 'SKU001',
    name: 'Product 1',
    image: 'https://havaya-b2b.co.il/src/img/products/49666.jpg',
    description: 'Description of product 1',
    packQuant: 10,
    barcode: '1',
    unpublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
},
  ];

const Template: ComponentStory<typeof SliderProduct> = (args) => <SliderProduct slides={3} data={mockDataProduct}/>;

export const Slider1 = Template.bind({});
Slider1.args = {};
