import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductList from './ProductList';
import './ProductList.styles.scss';

export default {
    title: 'Components/CatalogModule/ProductList',
    component: ProductList
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => <ProductList/>;

export const ProductList1 = Template.bind({});
ProductList1.args = {};
