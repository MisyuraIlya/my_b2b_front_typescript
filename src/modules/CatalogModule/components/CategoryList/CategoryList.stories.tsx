import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CategoryList from './CategoryList';
import './CategoryList.styles.scss';

export default {
    title: 'Components/CatalogModule/CategoryList',
    component: CategoryList
} as ComponentMeta<typeof CategoryList>;

const Template: ComponentStory<typeof CategoryList> = (args) => <CategoryList/>;

export const CategoryList1 = Template.bind({});
CategoryList1.args = {};
