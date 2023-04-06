import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CatalogEditList from './CatalogEditList';
import './CatalogEditList.styles.scss';

export default {
    title: 'Admin Panel/CatalogEditModule/CatalogEditList',
    component: CatalogEditList
} as ComponentMeta<typeof CatalogEditList>;

const Template: ComponentStory<typeof CatalogEditList> = (args) => <CatalogEditList/>;

export const CatalogEditList1 = Template.bind({});
CatalogEditList1.args = {};
