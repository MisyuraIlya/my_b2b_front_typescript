import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SliderCategory from './SliderCategory';
import './SliderCategory.styles.scss';

export default {
    title: 'Components/HomeModule/SliderCategory',
    component: SliderCategory
} as ComponentMeta<typeof SliderCategory>;

const mockDataProduct = [
    {id:1, category:'1',priceListBase:'', sku:'1', name:'a',image:'https://havaya-b2b.co.il/src/img/categories/6191621.jpg', description:'', packQuant:'', barcode:'',unpublished:true , createdAt:'2023-02-02', updatedAt:'2023-02-02'},
    {id:2, category:'1',priceListBase:'', sku:'1', name:'b',image:'https://havaya-b2b.co.il/src/img/categories/4191601.jpg', description:'', packQuant:'', barcode:'',unpublished:true , createdAt:'2023-02-02', updatedAt:'2023-02-02'},
    {id:3, category:'1',priceListBase:'', sku:'1', name:'c',image:'https://havaya-b2b.co.il/src/img/categories/3145559.jpg', description:'', packQuant:'', barcode:'',unpublished:true , createdAt:'2023-02-02', updatedAt:'2023-02-02'},
    {id:4, category:'1',priceListBase:'', sku:'1', name:'d',image:'https://havaya-b2b.co.il/src/img/categories/2191510.jpg', description:'', packQuant:'', barcode:'',unpublished:true , createdAt:'2023-02-02', updatedAt:'2023-02-02'},

]

const Template: ComponentStory<typeof SliderCategory> = (args) => <SliderCategory slides={3} data={mockDataProduct}/>;

export const Slider1 = Template.bind({});
Slider1.args = {};
