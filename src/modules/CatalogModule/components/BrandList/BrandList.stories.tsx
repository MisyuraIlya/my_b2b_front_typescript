import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BrandList from './BrandList';
import './BrandList.styles.scss';

export default {
    title: 'Components/CatalogModule/BrandList',
    component: BrandList
} as ComponentMeta<typeof BrandList>;

const Template: ComponentStory<typeof BrandList> = (args) => <BrandList/>;

export const BrandList1 = Template.bind({});
BrandList1.args = {};
